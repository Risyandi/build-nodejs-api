// require
const express = require('express');
const mongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
// const db = require('./config/db');
const app = express();

// listen server
const port = 8000;

// URL encoded when you using post method
app.use(bodyParser.urlencoded({ extended: true }));

// import
require('./app/routes')(app, {});

// mongoClient.connect(db.url, (err, database) => {
//     if (err) return console.log(err)
    // require('./app/routes')(app, database);

    // make sure your name
    // https://mlab.com/databases/risyandi-rest-api
    // db = database.db("risyandi-rest-api")    
    // require('./app/routes')(app, db);

    app.listen(port, () => {
        console.log('we are live on port :' + port);
    });
// })