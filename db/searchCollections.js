
// if (process.env.NODE_ENV === "production") {
// 	mongoURI = process.env.DB_URL;
//   } else {
// 	mongoURI = "mongodb://localhost/to-do-list";
//   }
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
// const url = 'mongodb://localhost:27017';
const url = 'mongodb://localhost/to-do-list';

// Database Name
const dbName = 'to-do-list';

const findDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection('towatchlists');
    // Find some documents
    collection.find().toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("Found the following records");
      console.log(docs);
      callback(docs);
    });
  }

// Use connect method to connect to the server
MongoClient.connect(url, function(err, client) {
  assert.equal(null, err);
  console.log("Connected successfully to server");

  const db = client.db(dbName);
    findDocuments(db, function() {
        client.close();
    })

  
});
