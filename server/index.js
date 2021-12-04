const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

// CORS
app.use(cors());

// Express Middleware for data on post request
app.use(express.json({ extended: false }));

// TODO ARRAY
const todos = [
  {
    id: 1,
    title: "Task 1 from api",
  },
  {
    id: 2,
    title: "Task 2 from api",
  },
];

// GET API
app.get("/api/todos", (req, res) => {
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

// Express port
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
