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


// const findAllCountries = (country_name)=>{
//     // let models = [];
//     // models.push(mongoose.models.towatchlists);
//     // models.push(mongoose.models.todolists);
//     var collections = mongoose.connections[0].collections;
//     var names = [];

//     Object.keys(collections).forEach(function(k) {
//         names.push(k);
//     });

//     console.log(names);
//     // collections(names[0]).find({'due': country_name})
//     // return Promise.all(names.map(col=>col.find({'due': country_name})));
// }



// findAllCountries('2019-10-01T06:00:00.000Z').then(result=>{
//     console.log(result);
//  }).catch(err=>{throw err;})