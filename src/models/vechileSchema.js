const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    chassisNumber: {
        type: String,
        required: true
    },
    registrationNumber: {
        type: String,
        required: true
    },
    lastLocation: {
        type: [Number],
        required: true,
        default: [0, 0]
    },
    kind: {
        type: String,
        enum: ['Reefer', 'Heavy', 'Light'],
        required: true,
    },
    milesDriven: {
        type: Number,
        required: true
    },
    lastInspection: {
        type: Date,
        required: false,
        default: Date.now()
    },
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema, 'vehicles');

module.exports = Vehicle;
