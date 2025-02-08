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
PORT=3000
MONGO_URI=mongodb://localhost:27017/your-database-name
```

If using MongoDB Atlas:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/your-database-name
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


## API Endpoints

### Create a Record

```http
POST /api/data
```

Request Body (JSON):

```json
{
  "name": "Example",
  "email": "example@email.com"
}
```

### Get All Records

```http
GET /api/data
```

### Get a Single Record

```http
GET /api/data/:id
```

### Update a Record

```http
PUT /api/data/:id
```

Request Body (JSON):

```json
{
  "name": "Updated Name"
}
```

### Delete a Record

```http
DELETE /api/data/:id
```

## Common Issues & Fixes

- **Error: Could not connect to the database**

  - Ensure MongoDB is running: `mongod`
  - Check if the `MONGO_URI` in `.env` is correct

- **npm start error: Missing script "start"**

  - Ensure `package.json` contains:
    ```json
    "scripts": {
      "start": "node server.js",
      "dev": "nodemon server.js"
    }
    ```
  - Run `npm run dev` instead of `npm start` if using `nodemon`
.

