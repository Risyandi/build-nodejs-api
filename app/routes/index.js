// routes index
const noteRoutes = require('./note_routes');

module.exports = function (app, db) {
    noteRoutes(app, db);
    // other route groups could here, in the future
};