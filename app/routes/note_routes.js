// first routes
module.exports = function (app, db) {
    // db.collection('notes')
    // const collection = 
    app.post('/notes', (req, res) => {
      
        // const note = { text: req.body.body, title: req.body.title };
        // db.collection('notes').insert(note, (err, results) =>{
        //     if (err) {
        //         res.send({ 'error': 'an error has occured' });
        //     } else {
        //         res.send(results.ops[0]);
        //     }
        // });
      
        console.log(req.body, ": result request body")
        res.send('Hello we are testing APIs')
    });
};