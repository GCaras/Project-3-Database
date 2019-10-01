const express = require('express');
const toWatchRouter = express.Router();

const toWatchController = require("../controllers/towatch")

toWatchRouter.get("/", toWatchController.index);
toWatchRouter.get("/:name", toWatchController.name);
toWatchRouter.get("/id/:id", toWatchController.id);
toWatchRouter.post("/", toWatchController.newToWatch);
toWatchRouter.put("/id/:id", toWatchController.update);
toWatchRouter.delete("/id/:id", toWatchController.delete);


module.exports = toWatchRouter;