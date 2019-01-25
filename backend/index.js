var express = require("express");
var app = express();
// var mongoose = require("mongoose");

app.set('port', process.env.PORT || 8000);

app.get('/', function(req, res) {
    res.type('json');
    res.json({works: 'yes'});
});

app.listen(app.get('port'), function(){
    console.log( 'Server running on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});