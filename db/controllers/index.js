const ToDo = require("../models/ToDo");
const ToWatch = require("../models/ToWatch");
const ToRead = require("../models/ToRead");

module.exports = {
    index: (req, res) => {
        //Return all events - check monarch lab
        ToWatch.find({})
            .populate(populateQuery)
            // .execPopulate()
            .then(result => res.json(result))
        
        
        .find({})
        .sort({due: "ascending"})
        .then(output => res.json(output))
    }
}


// Use Mongo 

// Retrieve
// var MongoClient = require('mongodb').MongoClient;

// // Connect to the db
// MongoClient.connect("mongodb://localhost:27017/exampleDb", function(err, db) {
//   if(err) { return console.dir(err); }

//   db.collection('test', function(err, collection) {});

//   db.collection('test', {w:1}, function(err, collection) {});

//   db.createCollection('test', function(err, collection) {});

//   db.createCollection('test', {w:1}, function(err, collection) {});

// });