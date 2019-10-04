const mongoose = require('../connection');

const ToDoSchema = new mongoose.Schema({
    taskItem: String,
    due: Date,
    url: String,
    type: String
});

const ToDo = mongoose.model("ToDoList", ToDoSchema);

module.exports = ToDo;