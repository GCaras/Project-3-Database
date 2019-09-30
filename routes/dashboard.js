const express = require('express');
const dashboardRouter = express.Router();

const dashboardController = require("../controllers/dashboard")

dashboardRouter.get("/", dashboardController.index);


module.exports = dashboardRouter;