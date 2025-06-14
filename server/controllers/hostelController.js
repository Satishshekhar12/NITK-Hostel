const Hostel = require('../models/Hostel');

// Get all hostels
exports.getAllHostels = async (req, res) => {
    try {
        const hostels = await Hostel.find();
        res.json(hostels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single hostel
exports.getHostelById = async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id);
        if (!hostel) {
            return res.status(404).json({ message: 'Hostel not found' });
        }
        res.json(hostel);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create new hostel
exports.createHostel = async (req, res) => {
    const hostel = new Hostel({
        name: req.body.name,
        capacity: req.body.capacity,
        currentOccupancy: req.body.currentOccupancy
    });

    try {
        const newHostel = await hostel.save();
        res.status(201).json(newHostel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update hostel
exports.updateHostel = async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id);
        if (!hostel) {
            return res.status(404).json({ message: 'Hostel not found' });
        }

        Object.keys(req.body).forEach(key => {
            hostel[key] = req.body[key];
        });

        const updatedHostel = await hostel.save();
        res.json(updatedHostel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete hostel
exports.deleteHostel = async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id);
        if (!hostel) {
            return res.status(404).json({ message: 'Hostel not found' });
        }

        await hostel.deleteOne();
        res.json({ message: 'Hostel deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}; 