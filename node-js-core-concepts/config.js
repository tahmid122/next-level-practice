require("dotenv").config();

const config = {
  app: {
    name: process.env.APP_NAME || "Default App",
    version: process.env.APP_VERSION || "1.0.0",
    port: process.env.port || 8080,
    env: process.env.NODE_ENV || "Development",
  },
};
console.log(config);

module.exports = config;
