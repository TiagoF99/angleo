let mongoose = require("mongoose");

const connection = "mongodb+srv://angleo:TkHBF5WsNXxR7jTa@cluster0-agkcf.gcp.mongodb.net/test?retryWrites=true";
const database = "";

class Database {
    constructor() {
        this._connect();
    }

    _connect() {
        mongoose.connect(connection)
            .then(() => {
                console.log("Database connected")
            })
            .catch(err => {
                console.log("Database connection error")
            })
    }
}

module.exports = new Database();