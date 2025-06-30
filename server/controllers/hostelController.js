import Hostel from '../models/Hostel.js';

// const hostelSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     image: { type: String, required: true },
//     photoSphere: { type: String, required: true },
//     warden: { type: [String], required: true },
//     supervisor: { type: [String], required: true },
//     rooms: { type: Number, required: true },
//     mess: { type: String, required: true },
//     facilities: { type: [String], required: true }
// });

// change all the controllers according to the new schema

exports.test = async (req, res) => {
    res.json({ adminInfo: req.adminInfo });
};

// Get all hostels
export const getAllHostels = async (req, res) => {
    try {
        const hostels = await Hostel.find({}, {image: 0});
        res.json(hostels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getHostelImage = async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id, {image: 1});
        res.json(hostel.image);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single hostel
export const getHostelById = async (req, res) => {
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

// Get meta data about hostels
exports.getHostelMeta = async (req, res) => {
    try {
        const meta = await Hostel.find({}, {updatedAt: 1}).sort({updatedAt: -1});
        res.json(meta[0]);
    } catch (error) {
        console.error("Error getting meta data about hostels:", error);
        res.status(500).json({ message: error.message });
    }
};

// Create new hostel
export const createHostel = async (req, res) => {
    const hostel = new Hostel({
        name: req.body.name,
        image: req.body.image,
        photoSphere: req.body.photoSphere,
        warden: req.body.warden,
        supervisor: req.body.supervisor,
        rooms: req.body.rooms,
        mess: req.body.mess,
        facilities: req.body.facilities
    });

    try {
        const newHostel = await hostel.save();
        res.status(201).json(newHostel);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update hostel
export const updateHostel = async (req, res) => {
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
export const deleteHostel = async (req, res) => {
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