const express = require("express");
const app = express();
const cors = require("cors");
const todoRoutes = require("./routes/routes");

// CORS
app.use(cors());

// Express Middleware for data on post request
app.use(express.json({ extended: false }));

// Routes
app.use("/api/todos", todoRoutes);

// Express port
const PORT = 3001;
app.listen(PORT, () => {
  console.log("Server is running on port 3001");
});
