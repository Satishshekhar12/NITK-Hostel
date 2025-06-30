// const express = require('express');
// const router = express.Router();
// const hostelController = require('../controllers/hostelController');

// // Hostel routes
// // Get all hostels
// router.get('/', hostelController.getAllHostels);

// // Get a hostel by ID
// router.get('/:id', hostelController.getHostelById);

// // Create a hostel
// router.post('/', hostelController.createHostel);

// // Update a hostel
// router.patch('/:id', hostelController.updateHostel);

// // Delete a hostel
// router.delete('/:id', hostelController.deleteHostel);

// module.exports = router; 
import express from 'express';
import {
  getAllHostels,
  getHostelById,
  createHostel,
  updateHostel,
  deleteHostel
} from '../controllers/hostelController.js';

const router = express.Router();

// Hostel routes
router.get('/', getAllHostels);
router.get('/:id', getHostelById);
router.post('/', createHostel);
router.patch('/:id', updateHostel);
router.delete('/:id', deleteHostel);

export default router;
