// Require connection file and save to mongoose.
const mongoose = require('../connection');

const ToDoSchema = new mongoose.Schema({
    task: String,
    due: Date,
    url: String,
    image: String
});

const ToDo = mongoose.model("ToDoList", ToDoSchema);

module.exports = ToDo;