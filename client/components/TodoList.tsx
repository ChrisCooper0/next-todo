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
  handleDelete: (id: string) => void;
}

const TodoList = ({ todo, handleDelete }: ITodo) => {
  return (
    <TodoListWrapper>
      <ul>
        {todo.map(({ id, title }) => (
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
