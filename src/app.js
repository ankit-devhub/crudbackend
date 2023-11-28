const express = require('express');
const app = express();
const cors = require('cors');



//middlewares
app.use(cors());
app.use(express.json());
app.use('', require('./routes/appRoutes'));



const db = require('./config/db');

db.on('error', console.error.bind(console, 'connection error:'));   
db.once('open', function() {
    console.log('Connected to MongoDB');
});



module.exports = app;