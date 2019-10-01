// Require connection file and save to mongoose.
const mongoose = require('../db/connection');

const ToWatchSchema = new mongoose.Schema({
    title: String,
    service: String,
    due: Date,
    url: String,
    image: String
});

const ToWatch = mongoose.model("ToWatchList", ToWatchSchema);

module.exports = ToWatch;