import express from "express";
import config from "./config";
import { initDB } from "./config/db";
const app = express();
const PORT = config.port;
//middleware
app.use(express.json());

// Initialize db

initDB();

// default
app.get("/", (req, res) => {
  res.send(
    `<h1>Welcome to <span style="color:blue">TODO APP</span> Server</h1>`,
  );
});

// listen/connection

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
