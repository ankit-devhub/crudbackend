const app = require('./src/app');
require('dotenv').config();





app.listen(process.env.PORT, () => {
    console.log('Backend Server Running on Port: '+ process.env.PORT);
});