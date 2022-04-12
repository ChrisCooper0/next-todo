import React from "react";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  margin-top: 2rem;

  .todos {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.5rem;
  }
`;

const Title = styled.p`
  font-size: 1.1rem;
  text-decoration: ${({ completed }) => (completed ? "line-through" : "none")};
  color: ${({ completed }) => (completed ? "grey" : "black")};
`;

const Button = styled.button`
  border: none;
  text-align: center;
  border-radius: 50%;
  margin-left: 1rem;
  padding: 0.2rem 0.4rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  color: #c96e6e;
  background-color: #f5f5f5;
  &:hover {
    background-color: #e5e5e5;
    color: #ce9a9a;
  }
`;

const Input = styled.input`
  margin-left: 1rem;
`;

interface ITodo {
  todo: { id: string; title: string; completed: boolean }[];
  handleDelete: (id: string) => void;
  handleUpdate: (id: string, title: string, completed: boolean) => void;
}

const TodoList = ({ todo, handleDelete, handleUpdate }: ITodo) => {
  return (
    <TodoListWrapper>
      {todo.map(({ id, title, completed }) => (
        <div className="todos" key={id}>
          <Title completed={completed}>{title}</Title>
          <Button type="button" onClick={() => handleDelete(id)}>
            X
          </Button>
          <Input
            type="checkbox"
            checked={completed}
            onClick={() => handleUpdate(id, title, completed)}
          />
        </div>
      ))}
    </TodoListWrapper>
  );
};

export default TodoList;
