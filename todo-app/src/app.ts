import express, { Request, Response } from "express";
import config from "./config";
import { initDB } from "./config/db";
import { userRoutes } from "./modules/user/user.routes";
import { todoRoutes } from "./modules/todo/todo.routes";
const app = express();
const PORT = config.port;

//middleware
app.use(express.json());

// Initialize db
initDB();

// user operations
app.use("/users", userRoutes);
//todos operations
app.use("/todos", todoRoutes);

// default
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to <span style="color:blue">TODO APP</span> Server</h1>`,
  );
});
//404
app.use((req, res) => {
  return res.status(404).json({
    success: false,
    message: "Route not found",
    data: { path: req.path, method: req.method },
  });
});

export default app;
