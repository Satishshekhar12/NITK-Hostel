import express from 'express';
import People from '../models/People.js';
import peopleController from '../controllers/peopleController.js';
import verifyAdminJWT from '../middleware/verifyAdminJWT.js';

const router = express.Router();

router.route('/')
    .get(peopleController.getAllPeople)
    .post(verifyAdminJWT, peopleController.createPerson);

router.route('/image/:id')
    .get(peopleController.getPersonImage);

router.route('/:id')
    .get(peopleController.getPersonById)
    .patch(verifyAdminJWT, peopleController.updatePerson)
    .delete(verifyAdminJWT, peopleController.deletePerson);

export default router; 