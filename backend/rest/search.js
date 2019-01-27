const express = require("express");
var router = express.Router();
var http = require("https");


function search(lat, long) {

    const yelp_key = "eNiPurskNXcFLvqjBfdyZKouNBvTOh812qnssO0BgNaEQAjOiuwsl1uo27t42avhhKcNIJ4-qj5gQhknGatvZyTMrEw-PqGn7C1xHQ8v8zX44nThpaLTvpH5em5MXHYx";
    const listing_limit = "10";

    let options = {
        host: "api.yelp.com",
        path: "/v3/businesses/search?latitude=" + lat + "&longitude=" + long + "&limit=" + listing_limit,
        headers: {
            "Authorization": "Bearer " + yelp_key,
        }
    }

    http.get(options, function(res) {
        res.on("data", function(chunk) {
            console.log("Accessing Yelp API for search. Status is " + res.statusCode + ".");
            return [res.statusCode, chunk.toString()];
            res.send(chunk.toString())
        });
    }).on("error", function(e) {
        console.log("Accessing Yelp API for search. Status is " + res.statusCode + ".");
        console.log("Got error: " + e.message);
        return [res.statusCode, "{\"code:\": " + res.statusCode];
    });

    return [0, 0];

}

module.exports = router;
