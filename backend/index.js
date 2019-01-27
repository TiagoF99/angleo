const express = require("express");

var multer  = require('multer')
var upload = multer({ dest: 'uploads/' })

// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

const {Translate} = require('@google-cloud/translate');

// Your Google Cloud Platform project ID
const projectId = 'e-copilot-229118';

// Instantiates a client
const translate = new Translate({
  projectId: projectId,
});

const app = express();

app.set('port', process.env.PORT || 8000);

app.get('/', function(req, res) {
    res.type('html');
    res.send("<h1>Nothing</h1>");
});



app.post('/profile', upload.single('avatar'), function (req, res, next) {
	// Performs label detection on the image file
	client.labelDetection(req.file).then(results => {
 	   var label = results[0].textAnnotations[0].description;
 	   var labels = "";
 	   var alpha = "abcdefghijklmnopqrstuvwxyzQAZWSXEDCRFVTGBYHNUJMKLOP";
 	   for (var i = 0; i < label.length; i++) {
 			if (alpha.search(label[i]) != -1  || label[i] === " ") {
    			labels += label[i];
    		}
    	}
    	translateRun(labels)
    	.then(function(translatedText) {
    		res.send(translatedText)
    	})
    })
})

async function translateRun(text) {
	var results = await translate.translate(text, 'en')
    const translation = results[0];
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  return results
}


app.listen(app.get('port'), function(){
    console.log( 'Server running on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.' );
});