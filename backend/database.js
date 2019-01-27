var MongoClient = require('mongodb').MongoClient;

const connection = "mongodb+srv://angleo:TkHBF5WsNXxR7jTa@cluster0-agkcf.gcp.mongodb.net/test?retryWrites=true";
const database = "angleo";
const collection = 'places';

function search(name, res) {
  MongoClient.connect(connection, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    var query = {name:{'$regex' : name, '$options' : 'i'}};
    dbo.collection(collection).find(query).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
}

function nearby(lat, long, res) {
  MongoClient.connect(connection, function(err, db) {
    if (err) throw err;
    var dbo = db.db(database);
    var query = {longitude:{$gt:long,$lt:long},latitude:{$gt:lat,$lt:lat}};
    dbo.collection(collection).find(query).toArray(function(err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
}

module.exports = {
  search: search,
  nearby: nearby
}
