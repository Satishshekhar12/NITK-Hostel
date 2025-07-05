/* old code snippet */
/*
import express from 'express';
import hostelController from '../controllers/hostelController.js';

const router = express.Router();

// Get all hostels
router.get('/', hostelController.getAllHostels);
router.get('/:id', hostelController.getHostelById);
router.get('/image/:id', hostelController.getHostelImage);

// Create a hostel
router.post('/', hostelController.createHostel);

// Update a hostel
router.patch('/:id', hostelController.updateHostel);

// Delete a hostel
router.delete('/:id', hostelController.deleteHostel);

export default router; 
*/

import express from "express";
import hostelController from "../controllers/hostelController.js";
import verifyAdminJWT from "../middleware/verifyAdminJWT.js";

const router = express.Router();

// Get all hostels
router.get("/", hostelController.getAllHostels);

// Get a hostel by ID
router.get("/:id", hostelController.getHostelById);

// Create a hostel (admin only)
router.post("/", verifyAdminJWT, hostelController.createHostel);

// Update a hostel (admin only)
router.put("/:id", verifyAdminJWT, hostelController.updateHostel);

// Delete a hostel (admin only)
router.delete("/:id", verifyAdminJWT, hostelController.deleteHostel);

export default router;
