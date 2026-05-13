import config from "./config";
import app from "./app";

const PORT = config.port;

// listen/connection
app.listen(PORT, () => {
  console.log(`Server is running at: http://localhost:${PORT}`);
});
