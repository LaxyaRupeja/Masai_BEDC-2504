const express = require('express');
const router = express.Router();
const {
  getAllTodos,
  getTodoById,
  createTodo,
  updateTodo,
  deleteTodo
} = require('../controllers/todo.controller');

// Routes for CRUD operations
// GET all todos
router.get('/', getAllTodos);

// GET a single todo by ID
router.get('/:id', getTodoById);

// POST a new todo
router.post('/', createTodo);

// PUT/UPDATE a todo
router.put('/:id', updateTodo);

// DELETE a todo
router.delete('/:id', deleteTodo);

module.exports = router; 