const express = require('express');
const toReadRouter = express.Router();

const toReadController = require("../controllers/toread")

toReadRouter.get("/", toReadController.index);
toReadRouter.get("/:name", toReadController.name);
toReadRouter.get("/:id", toReadController.id);
toReadRouter.post("/", toReadController.newToRead);
toReadRouter.put("/:id", toReadController.update);
toReadRouter.delete("/:id", toReadController.delete);


module.exports = toReadRouter;