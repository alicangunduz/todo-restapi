const http = require("http");
const todoController = require("./controller/todoController");

// Create a server
const server = http.createServer((req, res) => {
  if (req.url === "/api/todo" && req.method === "GET") {
    todoController.getAll(req, res);
  } else if (req.url.match(/\/api\/todo\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];
    todoController.getById(req, res, id);
  } else if (req.url === "/api/todo" && req.method === "POST") {
    todoController.create(req, res);
  } else if (req.url.match(/\/api\/todo\/([0-9]+)/) && req.method === "PUT") {
    const id = req.url.split("/")[3];
    todoController.update(req, res, id);
  } else if (
    req.url.match(/\/api\/todo\/([0-9]+)/) &&
    req.method === "DELETE"
  ) {
    const id = req.url.split("/")[3];
    todoController.remove(req, res, id);
  } else {
    res.write("Warning: Wrong Endpoint");
    res.end();
  }
});

// Listen to a port
server.listen(3000, () => {
  console.log("Server is running...");
});
