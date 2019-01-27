// Express
const express = require("express");
const app = express();
// Database rest functions
var mongo = require('./rest.js');
// Database dataviz functions
var dataviz = require('./dataviz.js');
var exphbs = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Port
app.set('port', process.env.PORT || 8000);

// Public files
app.use(express.static('public'));

// Data visualization for index
app.get('/', function(req, res) {
    res.render("dataviz", {});
});

// GET: List locations nearby
app.get('/get/nearby/:latitude/:longitude/:km', function(req, res) {
    res.type("json");
    mongo.nearby(
        parseFloat(req.params.latitude),
        parseFloat(req.params.longitude),
        parseFloat(req.params.km),
        res
    );
});

// POST: Searches locations by query
app.post('/post/search/query/name', function(req, res) {
    res.type("json");
    mongo.search(
        req.param.name,
        res
    );
});

/*
// Returns the search of a specific id
app.get('/rest/search/exact/id', function(req, res) {
    mongo.nearby(parseFloat(req.params.latitude), parseFloat(req.params.longitude), res);
});
*/

app.listen(app.get('port'), function(){
    console.log( 'Server running on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});
