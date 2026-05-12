import express from "express";
import config from "./config";
const app = express();
const PORT = config.port;
//middleware
app.use(express.json());

// listen/connection

app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
