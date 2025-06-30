const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.route('/login')
    .post(adminController.adminLogin);

router.route('/register')
    .post(adminController.adminRegister);

router.route('/refresh')
    .post(adminController.adminRefresh);

module.exports = router; 