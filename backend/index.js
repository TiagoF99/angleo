const express = require("express");
const app = express();
require('handlebars');
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
    res.send({
        montreal_count: dataviz.count(res),
        pointe_count: dataviz.count2(res),
        laval_count: dataviz.count3(res),

        lan_montreal_0: dataviz.language('Montréal', 0, res)

    });
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

// GET: Searches locations by query
app.get('/get/search/query/name/:name', function(req, res) {
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

// GOOGLE VISION -> TRANSLATE API
const multer = require('multer');
const bodyParser = require('body-parser');
const vision = require('@google-cloud/vision');
const client = new vision.ImageAnnotatorClient();
var upload = multer({ dest: './media/translate' })
var https = require('https');

app.post('/post/translate', upload.single("image"), function (req, res, next) {
    client.textDetection(req.file.path).then(results => {
 	   res.json(results[0].textAnnotations);
    })
    .catch(err => {
        console.error('ERROR:', err);
    });
});

app.listen(app.get('port'), function(){
    console.log( 'Server running on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});