
// Require connection file and save to mongoose.
const mongoose = require('../db/connection');

const NewComponentsSchema = new mongoose.Schema({
    name: String,
    url: String,
    icon: String
})

const DashboardSchema = new mongoose.Schema({
    NewComponents: [NewComponentsSchema]
});

const Dashboard = mongoose.model("Dashboard", DashboardSchema);

module.exports = Dashboard;