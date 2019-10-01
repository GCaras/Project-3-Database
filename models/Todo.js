// Require connection file and save to mongoose.
const mongoose = require('../db/connection');

const ToDoSchema = new mongoose.Schema({
    task: String,
    due: Date,
    url: String,
    image: String
});

const ToDo = mongoose.model("TodoList", ToDoSchema);

module.exports = ToDo;