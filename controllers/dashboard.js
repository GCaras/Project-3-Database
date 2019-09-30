const Dashboard = require("../models/dashboard");

module.exports = {
    index: (req, res) => {
        //Return all people
        Dashboard.find({}).then(output => res.json(output))
    },
//     name: (req, res) => {
//         //Return Dashboard by name
//         Dashboard.find({ name: req.params.name }).then(output => res.json(output))
//     },
//     id: (req, res) => {
//         //Return Dashboard by _id
//         Dashboard.find({ "_id": req.params.id }).then(output => res.json(output))
//     },
//     newDashboard: (req, res) => {
//         //Create new Dashboard
//         const newDashboard = req.body;
//         Dashboard.create(newDashboard).then(output => res.json(output))
//     },
//     update: (req, res) => {
//         //Modify Dashboard by _id search
//         const requestBody = req.body;
//         Dashboard.findOneAndUpdate({ "_id": req.params.id }, { requestBody }, { new: true })
//         .then(output => res.json(output))
//     },
//     delete: (req, res) => {
//         //Delete Dashboard entry by _id search
//         Dashboard.findOneAndDelete({ "_id": req.params.id }).then(output => res.json(output))
//     },
}