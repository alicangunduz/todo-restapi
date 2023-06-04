const todoModule = require("../modules/todoModule");
const utils = require("../utils");

// Get all todos
async function getAll(req, res) {
  await todoModule
    .getAll()
    .then((todo) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(todo));
      res.end();
    })
    .catch((err) => {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify(err));
      res.end();
    });
}

// Get todo by id
async function getById(req, res, id) {
  await todoModule
    .getById(id)
    .then((todo) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(todo));
      res.end();
    })
    .catch((err) => {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify(err));
      res.end();
    });
}

// Create a todo
async function create(req, res) {
  const body = await utils.getPostData(req);

  const { taskName, completed } = JSON.parse(body);

  const todo = {
    taskName,
    completed: completed || false,
  };

  await todoModule
    .create(todo)
    .then((todo) => {
      res.writeHead(201, { "Content-Type": "application/json" });
      res.write(JSON.stringify(todo));
      res.end();
    })
    .catch((err) => {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify(err));
      res.end();
    });
}

// Update a todo
async function update(req, res, id) {
  const todo = await todoModule.getById(id);

  if (!todo) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.write(JSON.stringify({ message: "Todo Not Found" }));
    res.end();
  } else {
    const body = await utils.getPostData(req);

    const { taskName, completed } = JSON.parse(body);

    const todoData = {
      taskName: taskName || todo.taskName,
      completed: completed || todo.completed,
    };

    await todoModule
      .update(id, todoData)
      .then((todo) => {
        res.writeHead(200, { "Content-Type": "application/json" });
        res.write(JSON.stringify(todo));
        res.end();
      })
      .catch((err) => {
        res.writeHead(404, { "Content-Type": "application/json" });
        res.write(JSON.stringify(err));
        res.end();
      });
  }
}

// Delete a todo
async function remove(req, res, id) {
  await todoModule
    .remove(id)
    .then((todo) => {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify("Todo Deleted ID: " + id));
      res.end();
    })
    .catch((err) => {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.write(JSON.stringify(err));
      res.end();
    });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
