const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/peopleController');

// Get all people
router.get('/', peopleController.getAllPeople);
router.get('/image/:id', peopleController.getPersonImage);

// Get a person by ID
router.get('/:id', peopleController.getPersonById);

// Create a person
router.post('/', peopleController.createPerson);

// Update a person
router.put('/:id', peopleController.updatePerson);

// Delete a person
router.delete('/:id', peopleController.deletePerson);

module.exports = router; 