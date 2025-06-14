const express = require('express');
const router = express.Router();
const hostelController = require('../controllers/hostelController');

// Hostel routes
router.get('/', hostelController.getAllHostels);
router.get('/:id', hostelController.getHostelById);
router.post('/', hostelController.createHostel);
router.patch('/:id', hostelController.updateHostel);
router.delete('/:id', hostelController.deleteHostel);

module.exports = router; 