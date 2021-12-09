import React from "react";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;

  ul {
    list-style: number;
  }
  li {
    margin-bottom: 0.75rem;
  }
`;

const Button = styled.button`
  border: none;
  border-radius: 5px;
  padding: 0.1rem 0.3rem;
  background-color: #f5f5f5;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  margin-left: 0.5rem;
  &:hover {
    background-color: #e5e5e5;
    color: red;
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
            <li key={id}>
              {title}
              <Button type="button" onClick={() => handleDelete(id)}>
                x
              </Button>
            </li>
          </div>
        ))}
      </ul>
    </TodoListWrapper>
  );
};

export default TodoList;
