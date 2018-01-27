const config = require('./config');
const express = require('express');
const app = express();
// Morgan logger
const morgan = require('morgan');
// For handling e.g. JSON-Data from requests
const bodyParser = require('body-parser');
// Mongoose DB connection
const mongoose = require('mongoose');


/*
    Mongoose
*/
// Connect to the database
const connectionString = 'mongodb://' + config.dbHost +
                            ":" + config.dbPort +
                            "/" + config.dbName;
mongoose.connect(connectionString);

const db = mongoose.connection;

db.on('error', error => {
    console.error('Connection error', error);
});
db.once('open', function () {
    console.log('Connected to database successfully!');
});
/*
    Express
*/
// Import Routes
const playerRoute = require('./api/routes/player');

// Logging via morgan
app.use(morgan('dev'));

// When parsing url encoded bodys
app.use(bodyParser.urlencoded({
    extended: false // Only simple bodys
}));
        
// Handling JSON
app.use(bodyParser.json());

// Throught all requests, allow CORS
app.use((req, res, next) => {
    // Allow CORS, prevent errors
    res.header('Access-Control-Allow-Origin', '*');
    // Set allowed headers
    res.header('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-Type, Accept, Authorisation'
    );
    // Response with possibilities
    if(req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 
            'GET, POST, PUT, PATCH, DELETE'
        );
        return res.status(200).json({});
    }
    next();
});


// Routes
app.use('/player', playerRoute);


// Everything that is not in a route
app.use((req, res, next) => {
    const error = new Error('Request not found');
    error.status = 404;
    next(error);
});

// Error
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            type: "Internal Server Error",
            message: error.message
        }
    });
});

module.exports = app;