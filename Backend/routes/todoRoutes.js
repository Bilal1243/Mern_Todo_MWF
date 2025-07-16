import express from "express";

const todoRoute = express.Router();

import { createTodo, getTodos , deleteTodo } from "../controllers/TodoController.js";

todoRoute.get("/", getTodos);

// http:localhost:3000/api/todos/create-todo
todoRoute.post("/create-todo", createTodo);

// part of the url path
// /students/:paramName
todoRoute.delete('/delete/:id' , deleteTodo)

export default todoRoute;