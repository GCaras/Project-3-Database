// Require connection file and save to mongoose.
const mongoose = require('../db/connection');

const TodoSchema = new mongoose.Schema({
    task: String,
    due: Date,
    url: String,
    image: String
});

const Todo = mongoose.model("TodoList", TodoSchema);

module.exports = Todo;