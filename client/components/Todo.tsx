import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TodoList from "./TodoList";
import { v4 as uuid } from "uuid";

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
  &:hover {
    background-color: #e5e5e5;
  }
`;

const Todo = () => {
  const [list, setList] = useState<any>([]);
  const [name, setName] = useState<string>("");

  const handleChange = (event: any) => {
    setName(event.target.value);
  };

  const handleAdd = () => {
    const newList = list.concat({ id: uuid(), name });
    setList(newList);
    setName("");
  };

  return (
    <>
      <TodoWrapper>
        <TodoInput>
          <input
            type="text"
            value={name}
            onChange={handleChange}
            required
            placeholder="Add a to do..."
          />
        </TodoInput>
        <Button type="button" onClick={handleAdd}>
          Add
        </Button>
      </TodoWrapper>
      <TodoList list={list} />
    </>
  );
};

export default Todo;
