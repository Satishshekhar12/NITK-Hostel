// const express = require('express');
// const router = express.Router();
// const peopleController = require('../controllers/peopleController');

// // Get all people
// router.get('/', peopleController.getAllPeople);

// // Get a person by ID
// router.get('/:id', peopleController.getPersonById);

// // Create a person
// router.post('/', peopleController.createPerson);

// // Update a person
// router.put('/:id', peopleController.updatePerson);

// // Delete a person
// router.delete('/:id', peopleController.deletePerson);

// module.exports = router; 
import express from 'express';
import {
  getAllPeople,
  getPersonById,
  createPerson,
  updatePerson,
  deletePerson
} from '../controllers/peopleController.js';

const router = express.Router();

// Get all people
router.get('/', getAllPeople);

// Get a person by ID
router.get('/:id', getPersonById);

// Create a person
router.post('/', createPerson);

// Update a person
router.put('/:id', updatePerson);

// Delete a person
router.delete('/:id', deletePerson);

export default router;
