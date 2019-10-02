// Require connection file and save to mongoose.
const mongoose = require('../connection');

const ToWatchSchema = new mongoose.Schema({
    Title: String,
    Poster: String,
});

const ToWatch = mongoose.model("ToWatchList", ToWatchSchema);

module.exports = ToWatch;