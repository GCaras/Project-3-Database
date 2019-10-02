const ToDo = require("../models/ToDo")
const ToWatch = require("../models/ToWatch")
const ToRead = require("../models/ToRead")

let Array1 = []

module.exports = {
    index: (req, res) => {
        //Return all events - check monarch lab
        let day = req.body.day
        ToWatch.find({ day })
        .then(result => res.json(result))
        
        
        // .find({})
        // .sort({due: "ascending"})
        // .then(output => res.json(output))
    }
}