const express = require('express');
const router = express.Router();
const verifyAdminJWT = require('../middleware/verifyAdminJWT');
const hostelController = require('../controllers/hostelController');


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

module.exports = router; 