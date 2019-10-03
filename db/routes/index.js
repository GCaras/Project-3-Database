const express = require('express');
const indexRouter = express.Router();

const indexController = require("../controllers/index")

indexRouter.get("/:dt", indexController.index);


module.exports = indexRouter;