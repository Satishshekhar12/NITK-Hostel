import express from 'express';
import verifyAdminJWT from '../middleware/verifyAdminJWT.js';
import hostelController from '../controllers/hostelController.js';

const router = express.Router();

router.route('/')
    .get(hostelController.getAllHostels)
    .post(verifyAdminJWT, hostelController.createHostel);

router.route('/test')
    .post(verifyAdminJWT, hostelController.test);

router.route('/image/:id')
    .get(hostelController.getHostelImage);

router.route('/meta')
    .get(hostelController.getHostelMeta);

router.route('/:id')
    .get(hostelController.getHostelById)
    .patch(verifyAdminJWT, hostelController.updateHostel)
    .delete(verifyAdminJWT, hostelController.deleteHostel);

export default router; 