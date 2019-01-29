// first routes
module.exports = function (app, db) {
 
    // post the data
    app.post('/notes', (req, res) => {
        // adding filled collections
        const note = { text: req.body.body, title: req.body.title };
        db.collection('notes').insert(note, (err, results) =>{
            if (err) {
                res.send({ 'error': 'an error has occured' });
            } else {
                res.send(results.ops[0]);
            }
        });
      
        console.log(req.body, ": result request body");
        // res.send('Hello we are testing APIs')
    });

    // MongoDB requires not just an ID as a string, but as an ID object or, as they call it, an ObjectID.
    var ObjectID = require('mongodb').ObjectID;
    
    // get the data
    app.get('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id) };
        db.collection('notes').findOne(details, (err, item) => {
            if (err) {
                res.send({'error':'An error has occured'});
            } else {
                res.send(item);
                console.log("succes get data");
            }
        });
    });

    // delete the data
    app.delete('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = { '_id': new ObjectID(id) };
        db.collection('notes').remove(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occured' });
            } else {
                res.send('Note :' + id + item + 'success delete!');
            }
        });
    });

    // update the data
    app.put('/notes/:id', (req, res) => {
        const id = req.params.id;
        const details = {'_id': new ObjectID(id)};
        const note = {text: req.body.body, title: req.body.title};
        db.collection('notes').update(details, note, (err, result) => {
            if (err) {
                res.send({'error':'An error has occured'});
            } else {
                res.send(note);
                console.log("update data success!");
            }
        });
    });
    
};