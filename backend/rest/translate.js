const express = require("express");
var router = express.Router();

router.get('/translate', function(req, res) {
    res.type("html");
    res.send("hello");
});

module.exports = router;