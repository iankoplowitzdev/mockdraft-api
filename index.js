require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

// Variables
const port = 3002;
const dbUrl = process.env.MONGO_URL;
const dbName = process.env.DB_NAME;
const dbPath = `${dbUrl}/${dbName}`;

app.use(cors({
  origin: process.env.APP_BASE_URL
}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => res.send('App is working'));

app.use('/api', routes);


// Connect to Mongo database
mongoose.connect(dbPath, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
const connection = mongoose.connection;
connection.on('error', console.error.bind(console, 'Error establishing connection to Mongo database!'));
connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});

app.listen(port, () => console.log(`App is listening on port ${port}!`));

module.exports = { app };
