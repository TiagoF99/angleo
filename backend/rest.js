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
        var latchange = km/111;
        var longChange = km/85;
        // Calculations from http://janmatuschek.de/LatitudeLongitudeBoundingCoordinates
        // For next time, use https://docs.mongodb.com/manual/geospatial-queries/
        var query = {
            $and: [{
                latitude:{
                    $gte: lat - latchange,
                    $lte: lat + latchange
                },
                longitude:{
                    $gte: long - longChange,
                    $lte: long + longChange
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

module.exports = {
    nameSearch: nameSearch,
    idFind: idFind,
    nearby: nearby
}
