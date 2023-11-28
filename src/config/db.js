const connectionUrl = process.env.MONGO_URL;
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ankit-devhub:ankitdemo123@cluster0.jjtjeb3.mongodb.net/?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


const db = mongoose.connection;

module.exports = db;