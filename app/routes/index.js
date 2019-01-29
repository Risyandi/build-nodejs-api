// routes index
const noteRoutes = require('./routes-notes');

module.exports = function (app, db) {
    noteRoutes(app, db);
    // other route groups could here, in the future
};