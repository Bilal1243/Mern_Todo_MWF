import Todos from "../models/todoModel.js";

const createTodo = async (req, res) => {
  const { title, description } = req.body;

  let todo = await Todos.create({
    title,
    description,
  });

  res.json(todo);
};

const getTodos = async (req, res) => {
  let todos = await Todos.find();

  res.json(todos);
};

const deleteTodo = async (req, res) => {
  try {
    const deleted = await Todos.findByIdAndDelete(req.params.id);

    if (!deleted) {
      return res.status(404).json({ message: "todo not found" });
    }

    return res.json({ message: "deleted" });
  } catch (error) {
    res.send(error);
  }
};

export { createTodo, getTodos, deleteTodo };
