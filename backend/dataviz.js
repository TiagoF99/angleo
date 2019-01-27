var MongoClient = require('mongodb').MongoClient;

const connection = "mongodb+srv://angleo:TkHBF5WsNXxR7jTa@cluster0-agkcf.gcp.mongodb.net/test?retryWrites=true";
const database = "angleo";
const collection = 'places';


function count(res) {
    MongoClient.connect(connection, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        var query = {city : "Montréal"}
        // The angular radius of the query circle in radians
    
        // Calculations from http://janmatuschek.de/LatitudeLongitudeBoundingCoordinates
        // For next time, use https://docs.mongodb.com/manual/geospatial-queries/
        

        dbo.collection(collection).find(query).count({}, function(err, count) {
            if (err) throw err;
            console.log(count);
            db.close();
        });
    });
}
function count2(res) {
    MongoClient.connect(connection, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        var query = {city : "Pointe-Aux-Trembles"}
        // The angular radius of the query circle in radians
    
        // Calculations from http://janmatuschek.de/LatitudeLongitudeBoundingCoordinates
        // For next time, use https://docs.mongodb.com/manual/geospatial-queries/
        

        dbo.collection(collection).find(query).count(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}
function count3(res) {
    MongoClient.connect(connection, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        var query = { city: "laval" }
                   
        

        dbo.collection(collection).find(query).count(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}



function language(qcity, lannum, res) {
    MongoClient.connect(connection, { useNewUrlParser: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db(database);

        var query = {
        	city: qcity,
        	language: lannum
        }

        

     
   dbo.collection(collection).find(query).count(function(err, result) {
            if (err) throw err;
            console.log(result);
            db.close();
        });
    });
}

module.exports = {
    count:count,
    count2:count2,
    count3:count3,
    language:language

}