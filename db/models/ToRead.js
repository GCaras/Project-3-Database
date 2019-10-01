const mongoose = require('../connection');

const ToReadSchema = new mongoose.Schema({
    volumeInfo: {
        title: String,
        authors: Array,
        imageLinks: {
        smallThumbnail: String,
        thumbnail: String,
    }},
    searchInfo: {
        textSnippet: String
    }
});

const ToRead = mongoose.model("ToReadList", ToReadSchema);

module.exports = ToRead;