const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

// CORS
app.use(cors());

// Express Middleware for data on post request
app.use(express.json({ extended: false }));

// TODO ARRAY
let todos = [];

// GET API
app.get("/api/todos", (_, res) => {
  res.status(200).json(todos);
});

// POST API
app.post("/api/todos", (req, res) => {
  const newTodo = {
    id: uuidv4(),
    title: req.body.title,
  };
  todos.push(newTodo);
  res.status(201).json(todos);
});

// DELETE API
app.delete("/api/todos", (req, res) => {
  todos = todos.filter((todo) => todo.id !== req.body[0].id);
  res.status(200).json(todos);
});

// PUT API
app.put("/api/todos", (req, res) => {
  const index = todos.findIndex((todo) => todo.id === req.body.data[0].id);
  todos[index].title = `${req.body.data[0].title} - Updated`;
  res.status(200).json(todos);
});

// Express port
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
