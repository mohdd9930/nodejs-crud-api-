# Node.js CRUD API with MongoDB

This is a simple CRUD (Create, Read, Update, Delete) API built using Node.js, Express, and MongoDB.

## Features

- RESTful API endpoints
- MongoDB integration
- Uses Mongoose for schema modeling
- Environment variable support using dotenv
- Proper error handling

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)

## Installation

### 1. Clone the repository:

```bash
git clone https://github.com/your-username/your-repo.git
cd your-repo
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=mongodb://localhost:27017/todo
```

### 4. Start the MongoDB Server (if using locally)

```bash
mongod
```

### 5. Start the Node.js Server

```bash
npm start
```

If using nodemon for automatic restarts:

```bash
npm run dev
```

Instructions to test the CRUD API using Postman.

## Prerequisites

1. Install [Postman](https://www.postman.com/downloads/)
2. Ensure your API server is running on `http://localhost:4000`

## Importing Postman Collection

1. Open Postman
2. Click on `File -> Import`
3. Select `Import From File`
4. Choose the provided Postman JSON file
5. Click `Import`

## API Endpoints

### 1. Get All Todos
- **Method:** `GET`
- **URL:** `http://localhost:4000/api/todos/`
- **Description:** Retrieves all todo items

### 2. Create a Todo
- **Method:** `POST`
- **URL:** `http://localhost:4000/api/todos/`
- **Body:**
  ```json
  {
    "task": "Task 1",
    "completed": false
  }
  ```
- **Description:** Creates a new todo item

### 3. Update a Todo
- **Method:** `PUT`
- **URL:** `http://localhost:4000/api/todos/:id`
- **Body:**
  ```json
  {
    "completed": true
  }
  ```
- **Description:** Updates an existing todo item (replace `:id` with a valid ID)

### 4. Delete a Todo
- **Method:** `DELETE`
- **URL:** `http://localhost:4000/api/todos/:id`
- **Description:** Deletes a todo item (replace `:id` with a valid ID)

## Running the API
Ensure your backend server is running on `localhost:4000`. If using Node.js, run:
```sh
npm start
```

Now you can test the API using Postman!


