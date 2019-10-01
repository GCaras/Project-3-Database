const express = require('express');
const todoRouter = express.Router();

const todoController = require("../controllers/todo")

todoRouter.get("/", todoController.index);
todoRouter.get("/:name", todoController.name);
todoRouter.get("/id/:id", todoController.id);
todoRouter.post("/", todoController.newTodo);
todoRouter.put("/id/:id", todoController.update);
todoRouter.delete("/id/:id", todoController.delete);


module.exports = todoRouter;