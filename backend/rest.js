var MongoClient = require('mongodb').MongoClient;
var ObjectId = require('mongodb').ObjectID;

const connection = "mongodb+srv://angleo:TkHBF5WsNXxR7jTa@cluster0-agkcf.gcp.mongodb.net/test?retryWrites=true";
const database = "angleo";
const collection = 'places';

// Earths radius
const earthrad = 6371;

function nearby(lat, long, km, res) {
    MongoClient.connect(connection, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        // The angular radius of the query circle in radians
        var radquery = km/earthrad;
        // Calculations from http://janmatuschek.de/LatitudeLongitudeBoundingCoordinates
        // For next time, use https://docs.mongodb.com/manual/geospatial-queries/
        var query = {
            $and: [{
                latitude:{
                    $gte: rad_to_degrees(degrees_to_rad(lat) - radquery), 
                    $lte: rad_to_degrees(degrees_to_rad(lat) + radquery)
                },
                longitude:{
                    $gte: rad_to_degrees(degrees_to_rad(long) + Math.asin(Math.sin(radquery)/Math.cos(lat))),
                    $lte: rad_to_degrees(degrees_to_rad(long) - Math.asin(Math.sin(radquery)/Math.cos(lat)))
                },
            }],
        };
        dbo.collection(collection).find(query).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
}

function nameSearch(qname, res) {
    MongoClient.connect(connection, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        var query = {$query:{name: {'$regex' : qname, "$options": "$i"}}, $orderby: {votes: -1}};
        dbo.collection(collection).find(query).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
}

function idFind(qid, res) {
    MongoClient.connect(connection, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);
        var query = ObjectId(qid);
        dbo.collection(collection).find(query).toArray(function(err, result) {
            if (err) throw err;
            res.json(result);
            db.close();
        });
    });
}

// HELPERS

let degrees_to_rad = (degrees) => {
    return degrees * (Math.PI/180);
}

let rad_to_degrees = (rad) => {
    return rad * (180/Math.PI);
}

module.exports = {
    nameSearch: nameSearch,
    idFind: idFind,
    nearby: nearby
}
