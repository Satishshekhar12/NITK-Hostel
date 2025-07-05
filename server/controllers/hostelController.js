/* old code snippet
import Hostel from '../models/Hostel.js';

// const hostelSchema = new mongoose.Schema({
//    
//  name: { type: String, required: true },
//     image: { type: String, required: true },
//     photoSphere: { type: String, required: true },
//     warden: { type: [String], required: true },
//     supervisor: { type: [String], required: true },
//     rooms: { type: Number, required: true },
//     mess: { type: String, required: true },
//     facilities: { type: [String], required: true }
// });

// change all the controllers according to the new schema

const test = async (req, res) => {
    res.json({ adminInfo: req.adminInfo });
};

// Get all hostels
const getAllHostels = async (req, res) => {
    try {
        const hostels = await Hostel.find({}, {image: 0});
        res.json(hostels);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getHostelImage = async (req, res) => {
    try {
        const hostel = await Hostel.findById(req.params.id, {image: 1});
        res.json(hostel.image);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get single hostel
const getHostelById = async (req, res) => {
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
const getHostelMeta = async (req, res) => {
    try {
        const meta = await Hostel.find({}, {updatedAt: 1}).sort({updatedAt: -1});
        res.json(meta[0]);
    } catch (error) {
        console.error("Error getting meta data about hostels:", error);
        res.status(500).json({ message: error.message });
    }
};

// Create new hostel
const createHostel = async (req, res) => {
    if (!req.adminInfo) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
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
const updateHostel = async (req, res) => {
    if (!req.adminInfo) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
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
const deleteHostel = async (req, res) => {
    if (!req.adminInfo) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
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

export default {
    getHostelImage,
    getHostelMeta,
    getAllHostels,
    getHostelById,
    createHostel,
    updateHostel,
    deleteHostel,
    test
};
*/

import Hostel from "../models/Hostel.js";
import People from "../models/People.js";

// Get all hostels
const getAllHostels = async (req, res) => {
	try {
		const hostels = await Hostel.find().sort({ name: 1 });
		res.json(hostels);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error fetching hostels", error: error.message });
	}
};

// Get hostel by ID
const getHostelById = async (req, res) => {
	try {
		const hostel = await Hostel.findById(req.params.id);

		if (!hostel) {
			return res.status(404).json({ message: "Hostel not found" });
		}

		res.json(hostel);
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error fetching hostel", error: error.message });
	}
};

// Create new hostel
const createHostel = async (req, res) => {
	try {
		const {
			name,
			image,
			photoSphere,
			warden,
			supervisor,
			rooms,
			mess,
			other_facilities,
		} = req.body;

		// Validate required fields
		if (!name || !warden || !supervisor || !rooms) {
			return res.status(400).json({
				message: "Missing required fields: name, warden, supervisor, rooms",
			});
		}

		// Create hostel without checking if warden/supervisor exist in People collection
		// This allows adding new people who aren't in the database yet
		const hostel = new Hostel({
			name,
			image,
			photoSphere,
			warden,
			supervisor,
			rooms,
			mess,
			other_facilities,
		});

		const savedHostel = await hostel.save();
		res.status(201).json(savedHostel);
	} catch (error) {
		console.error("Error creating hostel:", error);
		res
			.status(500)
			.json({ message: "Error creating hostel", error: error.message });
	}
};

// Update hostel
const updateHostel = async (req, res) => {
	try {
		console.log("Update request body:", req.body); // Debug log
		const {
			name,
			image,
			photoSphere,
			warden,
			supervisor,
			rooms,
			mess,
			other_facilities,
		} = req.body;

		console.log("Parsed data:", { name, warden, supervisor, rooms }); // Debug log

		// Update hostel without checking if warden/supervisor exist in People collection
		// This allows adding new people who aren't in the database yet
		const updatedHostel = await Hostel.findByIdAndUpdate(
			req.params.id,
			{
				name,
				image,
				photoSphere,
				warden,
				supervisor,
				rooms,
				mess,
				other_facilities,
				updatedAt: new Date(),
			},
			{ new: true, runValidators: true }
		);

		if (!updatedHostel) {
			return res.status(404).json({ message: "Hostel not found" });
		}

		console.log("Updated hostel:", updatedHostel); // Debug log
		res.json(updatedHostel);
	} catch (error) {
		console.error("Error updating hostel:", error);
		res
			.status(500)
			.json({ message: "Error updating hostel", error: error.message });
	}
};

// Delete hostel
const deleteHostel = async (req, res) => {
	try {
		const deletedHostel = await Hostel.findByIdAndDelete(req.params.id);

		if (!deletedHostel) {
			return res.status(404).json({ message: "Hostel not found" });
		}

		res.json({ message: "Hostel deleted successfully" });
	} catch (error) {
		res
			.status(500)
			.json({ message: "Error deleting hostel", error: error.message });
	}
};

export default {
	getAllHostels,
	getHostelById,
	createHostel,
	updateHostel,
	deleteHostel,
};
