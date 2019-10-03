const mongoose = require('../connection');

const ToDoSchema = new mongoose.Schema({
    description: String,
    due: Date,
    url: String,
    type: String
    // image: String
});

const ToDo = mongoose.model("ToDoList", ToDoSchema);

module.exports = ToDo;