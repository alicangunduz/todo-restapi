# ✅ Todo REST API Documentation

👋 Welcome to the documentation for the Todo REST API! This API allows you to manage a collection of todos. You can perform operations like retrieving all todos, retrieving a specific todo by its ID, updating a todo, and deleting a todo. The API is built using Node.js and is hosted on GitHub. Let's dive into the details of how to use this API effectively.

## 📍 Endpoints
The following endpoints are available in the Todo REST API:

### Retrieve all todos
```
GET /api/todo
```
This endpoint returns a list of all todos. It does not require any parameters.

### Retrieve a specific todo
```
GET /api/todo/{id}
```
Replace **`{id}`** with the ID of the todo you want to retrieve. This endpoint returns a single todo object.

### Update a todo
```
PUT /api/todo/{id}
```
Replace **`{id}`** with the ID of the todo you want to update. You need to include the following parameters in the request body as JSON:

- **`taskName`** (string): The updated name of the task.
- **`completed`** (boolean): The updated completion status of the task.

### Delete a todo
```
DELETE /api/todo/{id}
```

Replace **`{id}`** with the ID of the todo you want to delete. This endpoint deletes the specified todo from the collection.

## 🤔 Usage

To use the Todo REST API, you can follow these steps:

1. Clone the repository to your local machine. You can do this by running the following command in your terminal:
```
git clone https://github.com/alicangunduz/todo-restapi.git
```

2. Navigate to the cloned directory:

```
cd todo-restapi
```

3. Install the dependencies by running:

```
npm install
```

4. Start the server:

```
npm install  or npm run dev (nodemon)
```

The API will be running locally at **`http://localhost:3000`** .


## 🥳 Conclusion

Congratulations! You now have all the information you need to start using the Todo REST API. Feel free to explore the different endpoints and interact with the todos in your application. If you have any questions or issues, please don't hesitate to reach out. Happy coding! 🚀





