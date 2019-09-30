const express = require('express');
const todoRouter = express.Router();

const todoController = require("../controllers/todo")

todoRouter.get("/", todoController.index);


module.exports = todoRouter;