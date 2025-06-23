const express = require('express');
const router = express.Router();
const hostelController = require('../controllers/hostelController');

// Hostel routes
// Get all hostels
router.get('/', hostelController.getAllHostels);
router.get('/image/:id', hostelController.getHostelImage);

// Get a hostel by ID
router.get('/:id', hostelController.getHostelById);

// Create a hostel
router.post('/', hostelController.createHostel);

// Update a hostel
router.patch('/:id', hostelController.updateHostel);

// Delete a hostel
router.delete('/:id', hostelController.deleteHostel);

module.exports = router; 