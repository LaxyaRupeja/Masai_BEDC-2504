# Todo List API

A simple Todo List API with CRUD operations built with Node.js, Express, and MongoDB.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/todo-app
   ```
4. Start the server:
   ```
   npm start
   ```
   Or for development with auto-reload:
   ```
   npm run dev
   ```

## API Endpoints

### Get all todos
- **URL**: `/api/todos`
- **Method**: GET
- **Response**: List of all todos

### Get a single todo
- **URL**: `/api/todos/:id`
- **Method**: GET
- **Response**: Single todo object

### Create a new todo
- **URL**: `/api/todos`
- **Method**: POST
- **Body**:
  ```json
  {
    "title": "Task title",
    "description": "Task description",
    "status": "pending", // Options: pending, completed, in-progress
    "dueDate": "2023-12-31",
    "priority": "medium" // Options: low, medium, high
  }
  ```
- **Response**: Created todo object

### Update a todo
- **URL**: `/api/todos/:id`
- **Method**: PUT
- **Body**: Any fields to update
  ```json
  {
    "status": "completed",
    "priority": "high"
  }
  ```
- **Response**: Updated todo object

### Delete a todo
- **URL**: `/api/todos/:id`
- **Method**: DELETE
- **Response**: Success message 