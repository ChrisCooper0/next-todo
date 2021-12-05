import React, { useState, useEffect } from "react";
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
  &:hover {
    background-color: #e5e5e5;
  }
`;

const Loading = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Todo = ({ todo }: any) => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: any) => {
    setTitle(event.target.value);
  };

  const handleAdd = () => {
    const newTodo = { id: uuid(), title };

    axios
      .post("http://localhost:3001/api/todos", newTodo)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });

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
      {todo ? (
        <TodoList todo={todo} />
      ) : (
        <Loading>
          <p>Loading...</p>
        </Loading>
      )}
    </>
  );
};

export default Todo;
