const express = require("express");
const app = express();

app.set('port', process.env.PORT || 8000);

app.get('/', function(req, res) {
    res.type('html');
    res.send("<h1>Nothing</h1>");
});

app.use('/rest', require("./rest/translate.js"));
app.use('/rest', require("./rest/search.js"));

app.listen(app.get('port'), function(){
    console.log( 'Server running on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});