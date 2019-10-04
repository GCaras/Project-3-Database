const Todo = require("../models/ToDo.js");

module.exports = {
    index: (req, res) => {
        //Return all people
        Todo.find({})
        .sort({due: "ascending"})
        .then(output => res.json(output))
    },
    name: (req, res) => {
        //Return Todo by name
        Todo.find({ name: req.params.name }).then(output => res.json(output))
    },
    id: (req, res) => {
        //Return Todo by _id
        Todo.find({ "_id": req.params.id }).then(output => res.json(output))
    },
    newTodo: (req, res) => {
        //Create new Todo
        const newTodo = req.body;
        Todo.create(newTodo).then(output => res.json(output))
    },
    update: (req, res) => {
        //Modify Todo by _id search
        const requestBody = req.body;
        Todo.findOneAndUpdate({ "_id": req.params.id }, requestBody, { new: true })
        .then(output => res.json(output))
    },
    delete: (req, res) => {
        //Delete Todo entry by _id search
        Todo.findOneAndDelete({ "_id": req.params.id }).then(output => res.json(output))
    },
}