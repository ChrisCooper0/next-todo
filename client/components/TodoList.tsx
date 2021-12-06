import React, { useEffect } from "react";
import styled from "styled-components";

const TodoListWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  ul {
    list-style: number;
  }
  li {
    margin-bottom: 0.5rem;
  }
`;

interface ITodo {
  todo: { id: string; title: string }[];
}

const TodoList = ({ todo }: ITodo) => {
  return (
    <TodoListWrapper>
      <ul>
        {todo.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </TodoListWrapper>
  );
};

export default TodoList;
