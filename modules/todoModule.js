let todoDB = require("../db/todo.json");
const utils = require("../utils");
const { v4: uuidv4 } = require("uuid");

// Get all todos
function getAll() {
  return new Promise((resolve, reject) => {
    resolve(todoDB);
  });
}

// Get todo by id
function getById(id) {
  return new Promise((resolve, reject) => {
    const todo = todoDB.find((todo) => todo.id === id);
    resolve(todo);
  });
}

// Create a todo
function create(data) {
  return new Promise((resolve, reject) => {
    const newTodo = {
      id: uuidv4(),
      title: data.taskName,
      completed: data.completed,
    };
    todoDB.push(newTodo);
    utils.dbWrite(todoDB);
    resolve(newTodo);
  });
}

// Update a todo
function update(id, data) {
  return new Promise((resolve, reject) => {
    const index = todoDB.findIndex((todo) => todo.id === id);
    todoDB[index].taskName = data.taskName;
    todoDB[index].completed = data.completed;
    utils.dbWrite(todoDB);
    resolve(todoDB[index]);
  });
}

// Delete a todo
function remove(id) {
  return new Promise((resolve, reject) => {
    todoDB = todoDB.filter((todo) => todo.id !== id);
    utils.dbWrite(todoDB);
    resolve();
  });
}

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
