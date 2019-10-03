// const mongoose = require('mongoose');
const ToDo = require("./models/ToDo");
const ToWatch = require("./models/ToWatch");
const ToRead = require("./models/ToRead");

const dateSelect = 2;

let Array1 = []

ToWatch.find({ due: {
   $gte: new Date(`2019-10-0${dateSelect}T00:00:00Z`),
   $lte: new Date(`2019-10-0${dateSelect}T24:00:00Z`)
} })
.then(result => Array1.push(result))

ToDo.find({ due: {
    $gte: new Date(`2019-10-0${dateSelect}T00:00:00Z`),
    $lte: new Date(`2019-10-0${dateSelect}T24:00:00Z`)
 } })
 .then(result => Array1.push(result))

 ToRead.find({ due: {
    $gte: new Date(`2019-10-0${dateSelect}T00:00:00Z`),
    $lte: new Date(`2019-10-0${dateSelect}T24:00:00Z`)
 } })
 .then(result => Array1.push(result))



setTimeout(() => console.log(Array1), 500)
