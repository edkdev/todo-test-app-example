const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3002;

app.use(bodyParser.json());

let todos = [];

// Get all todos
app.get('/todos', (req, res) => {
    res.json(todos);
});

// Add a new todo
app.post('/todos', (req, res) => {
    const todo = req.body;
    todos.push(todo);
    res.status(201).json(todo);
});

// Update a todo
app.put('/todos/:id', (req, res) => {
    const { id } = req.params;
    const updatedTodo = req.body;
    todos[id] = updatedTodo;
    res.json(updatedTodo);
});

// Delete a todo
app.delete('/todos/:id', (req, res) => {
    const { id } = req.params;
    todos.splice(id, 1);
    res.status(204).send();
});

app.listen(port, () => {
    console.log(`Todo app listening at http://localhost:${port}`);
});