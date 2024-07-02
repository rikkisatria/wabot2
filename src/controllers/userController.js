const getUsers = (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(users));
};

module.exports = { getUsers };
