const Todo = require('../models/todo');

// Get all todos
const getTodos = async (req, res, next) => {
  try {
    const todos = await Todo.find();
    res.json(todos);
  } catch (error) {
    next(error);
  }
};

// Create a new todo
const createTodo = async (req, res, next) => {
  try {
    const newTodo = new Todo({
      task: req.body.task,
      completed: req.body.completed,
    });
    const savedTodo = await newTodo.save();
    res.status(201).json(savedTodo);
  } catch (error) {
    next(error);
  }
};

// Update a todo
const updateTodo = async (req, res, next) => {
  try {
    const updatedTodo = await Todo.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.json(updatedTodo);
  } catch (error) {
    next(error);
  }
};

// Delete a todo
const deleteTodo = async (req, res, next) => {
  try {
    await Todo.findByIdAndDelete(req.params.id);
    res.status(204).send();
  } catch (error) {
    next(error);
  }
};

module.exports = { getTodos, createTodo, updateTodo, deleteTodo };
