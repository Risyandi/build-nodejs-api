// require
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');
const app = express();

// listen server
const port = 8000;

// URL encoded when you using post method
app.use(bodyParser.urlencoded({ extended: true }));

// syntax commented because [:error] reason is can't set header
// require('./app/routes')(app, {});

// console.log(db.url, ":url mlab mongodb");
MongoClient.connect(db.url, (err, database) => {
    // if error give notify error
    if (err) {
        return console.log(err)
    }

    // make sure your name database for mongo version up 3.1
    // db = database.db("risyandi-rest-api")    
    require('./app/routes')(app, database);

    app.listen(port, () => {
        console.log('Server live on port :' + port);
    });
});