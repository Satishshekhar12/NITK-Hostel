const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');
const verifyJWT = require('../middleware/verifyJWT');

router.route('/')
    .get(peopleController.getAllPeople)
    .post(verifyJWT, peopleController.createPerson);

router.route('/image/:id')
    .get(peopleController.getPersonImage);

router.route('/:id')
    .get(peopleController.getPersonById)
    .patch(verifyJWT, peopleController.updatePerson)
    .delete(verifyJWT, peopleController.deletePerson);

module.exports = router; 