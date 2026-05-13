import express, { Request, Response } from "express";
import config from "./config";
import { initDB } from "./config/db";
import { userRoutes } from "./modules/user/user.routes";
const app = express();
const PORT = config.port;

//middleware
app.use(express.json());

// Initialize db
initDB();

// user operations
app.use("/users", userRoutes);

// default
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to <span style="color:blue">TODO APP</span> Server</h1>`,
  );
});

export default app;
