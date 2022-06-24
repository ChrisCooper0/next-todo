const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();

let todos = [];

router.get("/", (_, res) => {
  res.status(200).json(todos);
});

router.post("/", (req, res) => {
  const newTodo = {
    id: uuidv4(),
    title: req.body.title,
  };
  todos.push(newTodo);
  res.status(201).json(todos);
});

router.delete("/", (req, res) => {
  todos = todos.filter((todo) => todo.id !== req.body[0].id);
  res.status(200).json(todos);
});

router.put("/", (req, res) => {
  const index = todos.findIndex((todo) => todo.id === req.body.data[0].id);
  todos[index].completed = !todos[index].completed;
  res.status(200).json(todos);
});

module.exports = router;
