const ToWatch = require("../models/ToWatch");

module.exports = {
    index: (req, res) => {
        //Return all people
        ToWatch.find({}).then(output => res.json(output))
    },
    name: (req, res) => {
        //Return ToWatch by name
        ToWatch.find({ name: req.params.name }).then(output => res.json(output))
    },
    id: (req, res) => {
        //Return ToWatch by _id
        ToWatch.find({ "_id": req.params.id }).then(output => res.json(output))
    },
    newToWatch: (req, res) => {
        //Create new ToWatch
        const newToWatch = req.body;
        ToWatch.create(newToWatch).then(output => res.json(output))
    },
    update: (req, res) => {
        //Modify ToWatch by _id search
        const requestBody = req.body;
        ToWatch.findOneAndUpdate({ "_id": req.params.id }, { requestBody }, { new: true })
        .then(output => res.json(output))
    },
    delete: (req, res) => {
        //Delete ToWatch entry by _id search
        ToWatch.findOneAndDelete({ "_id": req.params.id }).then(output => res.json(output))
    },
}