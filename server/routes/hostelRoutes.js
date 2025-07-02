import express from 'express';
import verifyAdminJWT from '../middleware/verifyAdminJWT.js';
import hostelController from '../controllers/hostelController.js';

const router = express.Router();

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
