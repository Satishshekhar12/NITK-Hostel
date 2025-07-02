import express from 'express';
import People from '../models/People.js';
import peopleController from '../controllers/peopleController.js';
import verifyAdminJWT from '../middleware/verifyAdminJWT.js';

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
