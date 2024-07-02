const http = require("http");
const userRoutes = require("./routes/userRoutes");
const logger = require("./utils/logger");

const app = (req, res) => {
  logger(`${req.method} ${req.url}`);
  userRoutes(req, res);
};

const server = http.createServer(app);

module.exports = server;
