const routes = require('express').Router();


routes.get('/', (req, res) => {
    res.send('Backend Server Running on Port:' + process.env.PORT);
});

//importing controllers
const { getVechile, createVehicle, deleteVehicle, updateVehicle} = require('../controllers/vehicle');


routes.get('/vehicles', getVechile);
routes.post('/vehicles', createVehicle);
routes.delete('/vehicles/:id', deleteVehicle);
routes.put('/vehicles/:id', updateVehicle);


module.exports = routes;  