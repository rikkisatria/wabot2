const { getUsers } = require("../controllers/userController");

const userRoutes = (req, res) => {
  if (req.method === "GET" && req.url === "/api/users") {
    return getUsers(req, res);
  }
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Route not found" }));
};

module.exports = userRoutes;
