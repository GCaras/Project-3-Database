const ToDo = require("../models/ToDo");
const ToWatch = require("../models/ToWatch");
const ToRead = require("../models/ToRead");




module.exports = {
    index: (req, res) => {

        // Receiving substring splicing off the Zulu time
        let dateAndTime = req.params.dt
        console.log(dateAndTime)

        let Array1 = []
        let ArrayResult = []

        ToWatch.find({ due: {
            
            $gte: new Date(`${dateAndTime}T00:00:00Z`),
            $lte: new Date(`${dateAndTime}T24:00:00Z`)
        } })
        .then(result => Array1.push(result))

        ToDo.find({ due: {
            $gte: new Date(`${dateAndTime}T00:00:00Z`),
            $lte: new Date(`${dateAndTime}T24:00:00Z`)
        } })
        .then(result => Array1.push(result))

        ToRead.find({ due: {
            $gte: new Date(`${dateAndTime}T00:00:00Z`),
            $lte: new Date(`${dateAndTime}T24:00:00Z`)
        } })
        .then(result => Array1.push(result))
        .then(() => ArrayResult = [Array1])
        .then(result => ArrayResult = result.flat([2]) )
        .then(() => res.json(ArrayResult))

        
    }
}
