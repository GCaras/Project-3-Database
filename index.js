const express = require('express')
const app = express();
const parser = require('body-parser');
const cors = require('cors');

// Requiring controllers
const toDoRoutes = require('./routes/todo');
const toWatchRoutes = require('./routes/towatch');
const toReadRoutes = require('./routes/toread');

// The coded needed to make body-parser work.
app.use(parser.urlencoded({extended: true}))
app.use(parser.json());
app.use(cors());

// Instantiating controllers
app.use('/todo/', toDoRoutes)
app.use('/towatch/', toWatchRoutes);
app.use('/toread/', toReadRoutes);

app.set("port", process.env.PORT || 8081);

app.listen(app.get("port"), () => {
  console.log(` PORT: ${app.get("port")} `);
});