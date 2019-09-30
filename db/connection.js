const mongoose = require('mongoose');

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/dashboard-aggregator', { useNewUrlParser: true })
.then((conn) => {
	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
})
.catch(err => {
	console.error(err)
})


module.exports = mongoose