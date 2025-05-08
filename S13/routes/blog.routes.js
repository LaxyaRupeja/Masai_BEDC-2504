const express = require('express');
const router = express.Router();
const {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
} = require('../controllers/blog.controller');
const checkRole = require('../middlewares/roleMiddleware');

// Routes for CRUD operations
// GET all todos
router.get('/', checkRole(["admin","author","reader"]),getAllBlogs);

// GET a single todo by ID
router.get('/:id', getBlogById);

// POST a new todo
router.post('/', checkRole(["admin", "author"]), createBlog);

// PUT/UPDATE a todo
router.put('/:id', checkRole(["admin"]) ,updateBlog);

// DELETE a todo
router.delete('/:id', checkRole(["admin"]), deleteBlog);

module.exports = router; 