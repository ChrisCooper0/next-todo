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

const TodoList = ({ todo }: any) => {
  return (
    <TodoListWrapper>
      <ul>
        {todo.map((item: any) => (
          <li key={item.id}>{item.title}</li>
        ))}
      </ul>
    </TodoListWrapper>
  );
};

export default TodoList;
