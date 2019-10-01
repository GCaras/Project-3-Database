const express = require('express');
const toWatchRouter = express.Router();

const toWatchController = require("../controllers/towatch")

toWatchRouter.get("/", toWatchController.index);
toWatchRouter.get("/:name", toWatchController.name);
toWatchRouter.get("/:id", toWatchController.id);
toWatchRouter.post("/", toWatchController.newTodo);
toWatchRouter.put("/:id", toWatchController.update);
toWatchRouter.delete("/:id", toWatchController.delete);


module.exports = toWatchRouter;