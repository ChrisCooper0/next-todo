import React, { useState } from "react";
import styled from "styled-components";

const ToDoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ToDoInput = styled.div`
  padding: 2rem;
  text-align: center;
  .label {
    margin-right: 0.5rem;
  }
  .input {
    border: none;
    background-color: whitesmoke;
    padding: 0.35rem 1rem 0.35rem 0.5rem;
    border-radius: 5px;
  }
`;

const ButtonWrapper = styled.button`
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  background-color: #f5f5f5;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #e5e5e5;
  }
`;
const Todo = () => {
  const [showSubmitButton, setShowSubmitButton] = useState(false);

  const handleInput = () => {
    setTimeout(() => {
      setShowSubmitButton(true);
    }, 500);
  };

  return (
    <ToDoWrapper>
      <ToDoInput>
        <label htmlFor="todo" className="label">
          To Do:
        </label>
        <input
          type="text"
          id="todo"
          className="input"
          placeholder="Add a todo..."
          onChange={handleInput}
        />
      </ToDoInput>
      {showSubmitButton && <ButtonWrapper>Submit</ButtonWrapper>}
    </ToDoWrapper>
  );
};

export default Todo;
