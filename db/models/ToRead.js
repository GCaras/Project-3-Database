const mongoose = require('../connection');

const ToReadSchema = new mongoose.Schema({
    due: Date,
    description: String,
    thumbnail: String,
    title: String,
    type: String
    
    // Raw data structure below
    // volumeInfo: {
    //     title: String,
    //     authors: Array,
    //     imageLinks: {
    //     smallThumbnail: String,
    //     thumbnail: String,
    // }},
    // searchInfo: {
    //     textSnippet: String
    // }
});

const ToRead = mongoose.model("ToReadList", ToReadSchema);

module.exports = ToRead;