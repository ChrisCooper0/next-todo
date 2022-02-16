import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";
import axios from "axios";

const TodoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

const TodoInput = styled.div`
  padding: 2rem;
  text-align: center;

  input {
    border: none;
    border-radius: 5px;
    background-color: whitesmoke;
    padding: 0.5rem 1rem;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.5rem 1rem;
  background-color: #f5f5f5;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover {
    background-color: #e5e5e5;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState<string>("");

  const getTodos = async () => {
    const res = await axios.get("http://localhost:3001/api/todos");
    const data = res.data;
    setTodos(data);
  };

  useEffect(() => {
    getTodos();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleAdd = async () => {
    const newTodo = { id: uuid(), title };
    const res = await axios.post("http://localhost:3001/api/todos", newTodo);
    const data = res.data;
    setTodos(data);
    setTitle("");
  };

  const handleDelete = async (id: string) => {
    if (todos) {
      const removeTodo = todos.filter((todo: { id: string }) => {
        return todo.id === id;
      });

      const res = await axios.delete("http://localhost:3001/api/todos", {
        data: removeTodo,
      });
      setTodos((await res).data);
    }
  };

  const handleUpdate = async (id: string) => {
    const updateTodo = todos.filter((todo: { id: string }) => {
      return todo.id === id;
    });

    const res = await axios.put("http://localhost:3001/api/todos", {
      data: updateTodo,
    });
    setTodos((await res).data);
  };

  return (
    <>
      <TodoWrapper>
        <TodoInput>
          <input
            type="text"
            value={title}
            onChange={handleChange}
            required
            placeholder="Add a to do..."
          />
        </TodoInput>
        <Button type="button" onClick={handleAdd}>
          Add
        </Button>
      </TodoWrapper>
      {todos ? (
        <TodoList
          todo={todos}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
        />
      ) : (
        <Loading>
          <p>Loading...</p>
        </Loading>
      )}
    </>
  );
};

export default Todo;
