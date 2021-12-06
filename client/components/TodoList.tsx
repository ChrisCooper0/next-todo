import axios from "axios";
import React from "react";
import styled from "styled-components";
import { Button } from "./Todo";

const TodoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  ul {
    list-style: number;
  }
  li {
    margin-bottom: 1rem;
  }
  button {
    margin-bottom: 2rem;
  }
`;

interface ITodo {
  todo: { id: string; title: string }[];
}

const TodoList = ({ todo }: ITodo) => {
  const handleDelete = async (idToDelete: string) => {
    const removeTodo = todo.filter((todo: { id: string }) => {
      return todo.id === idToDelete;
    });

    const res = axios.delete("http://localhost:3001/api/todos", {
      data: removeTodo,
    });
    todo = (await res).data;
    console.log(todo, "remaining todos");
  };

  return (
    <TodoListWrapper>
      <ul>
        {todo.map(({ id, title }: any) => (
          <div key={id}>
            <li key={id}>{title}</li>
            <Button type="button" onClick={() => handleDelete(id)}>
              Delete
            </Button>
          </div>
        ))}
      </ul>
    </TodoListWrapper>
  );
};

export default TodoList;
