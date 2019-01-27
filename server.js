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

// commented because error: can't set header
// require('./app/routes')(app, {});

// console.log(db.url, ":url mlab mongodb");
MongoClient.connect(db.url, (err, database) => {
    // if error give notify error
    if (err) {
        return console.log(err)
    }
    
    
    // make sure your name
    // db = database.db("risyandi-rest-api")    
    require('./app/routes')(app, database);

    // db.collection('notes').insertOne(
    //     {
    //         title: 'Hello MongoDB',
    //         body: 'Hopefully this works!'
    //     },
    //     function (err, res) {
    //         if (err) {
    //             db.close();
    //             return console.log(err);
    //         }
    //         // Success
    //         db.close();
    //     }
    // )

    app.listen(port, () => {
        console.log('Server live on port :' + port);
    });
});