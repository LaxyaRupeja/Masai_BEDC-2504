const Blog = require('../models/blog.model');
const jwt = require("jsonwebtoken");

// Get all todos
const getAllBlogs = async (req, res) => {
  try {
    console.log("THIS IS MY USER",req.user);
    const todos = await Blog.find({
        author:req.user.id
    });
    res.status(200).json(todos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single todo by ID
const getBlogById = async (req, res) => {
  try {
    const todo = await Blog.findById(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    res.status(200).json(todo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Create a new todo
const createBlog = async (req, res) => {
  try {
    const newBlog = new Blog({
      ...req.body,
      author:req.user.id
    });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update a todo
const updateBlog = async (req, res) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!updatedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    res.status(200).json(updatedBlog);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a todo
const deleteBlog = async (req, res) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    
    if (!deletedBlog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    res.status(200).json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllBlogs,
  getBlogById,
  createBlog,
  updateBlog,
  deleteBlog
}; 