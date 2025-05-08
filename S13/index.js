const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authMiddleware = require("./middlewares/authMiddleware");
require('dotenv').config();

const connectDB = require('./config/db');
const app = express();

// Connect to Database
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const todoRoutes = require('./routes/todo.routes');
const blogRoutes = require('./routes/blog.routes');
const userRouter = require('./routes/user.routes');


app.use('/api/todos', authMiddleware,todoRoutes);

app.use("/api/user",userRouter);
app.use("/api/blog",authMiddleware,blogRoutes);



// Home route
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to Todo API' });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
