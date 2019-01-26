var bodyParser =    require("body-parser");
var multer  =   require('multer');
var morgan  =   require('morgan');

const express = require("express");
var router = express.Router();

// // Imports the Google Cloud client library
// const vision = require('@google-cloud/vision');

// // Creates a client
// const client = new vision.ImageAnnotatorClient();

// // Performs label detection on the image file
// client.labelDetection('./resources/wakeupcat.jpg').then(results => {
//     const labels = results[0].textAnnotations[0].description;

//     console.log('Labels:');
//     labels.forEach(label => console.log(label.description));
//   })
//   .catch(err => {
//     console.error('ERROR:', err);
//   });


const storage = multer.diskStorage({
  destination: 'some-destination',
  filename: function (req, file, callback) {
    //..
  }
});


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));
router.use(morgan('dev'));

router.post('/translate', upload.single('avatar'), (req, res) => {

	res.type("html");
    res.send("hello");

  if (!req.file) {
    console.log("No file received");
    return res.send({
      success: false
    });

  } else {
    console.log('file received');
    return res.send({
      success: true
    })
  }
});

const host = req.host;
const filePath = req.protocol + "://" + host + '/' + req.file.path;

router.use(express.static(__dirname, 'public'));





// Imports the Google Cloud client library
const vision = require('@google-cloud/vision');

// Creates a client
const client = new vision.ImageAnnotatorClient();

// Performs label detection on the image file
client.labelDetection(filepath).then(results => {
    var label = results[0].textAnnotations[0].description;
    this.labels = "";
    var alpha = "abcdefghijklmnopqrstuvwxyzQAZWSXEDCRFVTGBYHNUJMKLOP";
    for (var i = 0; i < label.length; i++) {
    	if (alpha.search(label[i]) != -1  || label[i] === " ") {
    		this.labels += label[i];
    	}
    }
})

console.log(this.labels);



const {Translate} = require('@google-cloud/translate');

// Your Google Cloud Platform project ID
const projectId = 'e-copilot-229118';

// Instantiates a client
const translate = new Translate({
  projectId: projectId,
});

// The text to translate
const text = this.labels;
// The target language
const target = 'en';

// Translates some text into english
translate
  .translate(text, target)
  .then(results => {
    const translation = results[0];

    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);
  })
  .catch(err => {
    console.error('ERROR:', err);
  });


module.exports = router;