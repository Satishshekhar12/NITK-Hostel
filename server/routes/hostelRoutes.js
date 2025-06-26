const express = require('express');
const router = express.Router();
const verifyJWT = require('../middleware/verifyJWT');
const hostelController = require('../controllers/hostelController');


router.route('/')
    .get(hostelController.getAllHostels)
    .post(verifyJWT, hostelController.createHostel);

router.route('/image/:id')
    .get(hostelController.getHostelImage);

router.route('/meta')
    .get(hostelController.getHostelMeta);

router.route('/:id')
    .get(hostelController.getHostelById)
    .patch(verifyJWT, hostelController.updateHostel)
    .delete(verifyJWT, hostelController.deleteHostel);

module.exports = router; 