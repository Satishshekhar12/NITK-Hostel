const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');
const verifyAdminJWT = require('../middleware/verifyAdminJWT');

router.route('/')
    .get(peopleController.getAllPeople)
    .post(verifyAdminJWT, peopleController.createPerson);

router.route('/image/:id')
    .get(peopleController.getPersonImage);

router.route('/:id')
    .get(peopleController.getPersonById)
    .patch(verifyAdminJWT, peopleController.updatePerson)
    .delete(verifyAdminJWT, peopleController.deletePerson);

module.exports = router; 