const ToDo = require("../models/ToDo");
const ToWatch = require("../models/ToWatch");
const ToRead = require("../models/ToRead");

function flatten(arr) {
    return arr.reduce(function (flat, toFlatten) {
      return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
  }


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
        .then(() => flatten(Array1))
        // .flat() doesn't work in heroku. Only works in local
        // .then(result => ArrayResult = result.flat([2]) )
        .then(result => res.json(result))
        .then(result => console.log(result))
    }
}
