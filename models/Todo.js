
// Require connection file and save to mongoose.
const mongoose = require('../db/connection');

// const TodoSchema = new mongoose.Schema({
//     name: String,
//     url: String,
//     icon: String
// })

const TodoListSchema = new mongoose.Schema({
    // NewComponents: [NewComponentsSchema]
    text: String,
});

const Todo = mongoose.model("TodoList", TodoListSchema);

module.exports = Todo;