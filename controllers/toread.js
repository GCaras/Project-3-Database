const ToRead = require("../models/ToRead");

module.exports = {
    index: (req, res) => {
        //Return all people
        ToRead.find({}).then(output => res.json(output))
    },
    name: (req, res) => {
        //Return ToRead by name
        ToRead.find({ name: req.params.name }).then(output => res.json(output))
    },
    id: (req, res) => {
        //Return ToRead by _id
        ToRead.find({ "_id": req.params.id }).then(output => res.json(output))
    },
    newToRead: (req, res) => {
        //Create new ToRead
        const newToRead = req.body;
        ToRead.create(newToRead).then(output => res.json(output))
    },
    update: (req, res) => {
        //Modify ToRead by _id search
        const requestBody = req.body;
        ToRead.findOneAndUpdate({ "_id": req.params.id }, { requestBody }, { new: true })
        .then(output => res.json(output))
    },
    delete: (req, res) => {
        //Delete ToRead entry by _id search
        ToRead.findOneAndDelete({ "_id": req.params.id }).then(output => res.json(output))
    },
}