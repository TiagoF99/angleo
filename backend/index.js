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

// GET: List locations near a coordinates within a certain km range
app.get('/get/nearby/:latitude/:longitude/:km', function(req, res) {
    res.type("json");
    mongo.nearby(
        parseFloat(req.params.latitude),
        parseFloat(req.params.longitude),
        parseFloat(req.params.km),
        res
    );
});

// GET: Searches locations by query
app.post('/get/search/query/name/:name', function(req, res) {
    res.type("json");
    mongo.nameSearch(
        req.params.name,
        res
    );
});

// GET: Returns the search of a specific id
app.get('/get/search/exact/id/:id', function(req, res) {
    res.type("json");
    mongo.idFind(
        req.params.id,
        res
    );
});

app.listen(app.get('port'), function(){
    console.log( 'Server running on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});
