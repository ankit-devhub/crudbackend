const Vehicle = require("../models/vechileSchema");

const getVechile = async (req, res) => {
    try {
        const vehicles = await Vehicle.find();
        res.status(200).json(vehicles);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const createVehicle = async (req, res) => {
    const vehicle = req.body;
    const newVehicle = new Vehicle(vehicle);
    try {
        const existingUser = await Vehicle.findOne({ chassisNumber: vehicle.chassisNumber });

        if (existingUser) {
            return res.status(409).json({ message: 'User already exists' });
        }
        await newVehicle.save();
        res.status(201).json(newVehicle);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

const deleteVehicle = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id);
        // if user id is not provided in the request parameters
        if (!id) {
            return res.status(400).json({ message: 'Missing vehicle id in request body' });
        }
        const deletedVehicle = await Vehicle.findByIdAndDelete(id);

        if (!deletedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }

        res.json({ message: 'Vehicle deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

const updateVehicle = async (req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        if (!id) {
            return res.status(400).json({ message: 'Missing vehicle id in request parameters' });
        }
        const updatedVehicle = await Vehicle.findByIdAndUpdate(id, updatedData, { new: true });

        if (!updatedVehicle) {
            return res.status(404).json({ message: 'Vehicle not found' });
        }
        res.json({ message: 'Vehicle updated successfully', updatedVehicle });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

module.exports = { getVechile, createVehicle, updateVehicle, deleteVehicle};