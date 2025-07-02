import People from '../models/People.js';

// Get all people
const getAllPeople = async (req, res) => {
    try {
        const people = await People.find({}, { image: 0 });
        res.json(people);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const getPersonImage = async (req, res) => {
    try {
        const person = await People.findById(req.params.id, { image: 1 });
        res.json(person.image);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const getPersonById = async (req, res) => {
    try {
        const person = await People.findById(req.params.id);
        if (!person) return res.status(404).json({ message: 'Person not found' });
        res.json(person);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createPerson = async (req, res) => {
    const person = new People(req.body);
    try {
        const newPerson = await person.save();
        res.status(201).json(newPerson);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Create multiple persons
// exports.createMultiplePersons = async (req, res) => {
//     const persons = req.body;
//     for (const person of persons) {
//         if (!person.name || !person.role || !person.designation) {
//             return res.status(400).json({ message: 'All fields are required', person: person });
//         }
//     }
//     try {
//         const newPersons = await People.insertMany(persons);
//         res.status(201).json({message: persons.length + " persons created successfully"});
//     } catch (err) {
//         res.status(400).json({ message: err.message });
//     }
// };

// Update a person
const updatePerson = async (req, res) => {
    try {
        const updatedPerson = await People.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedPerson) return res.status(404).json({ message: 'Person not found' });
        res.json(updatedPerson);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// Delete a person
const deletePerson = async (req, res) => {
    try {
        const deletedPerson = await People.findByIdAndDelete(req.params.id);
        if (!deletedPerson) return res.status(404).json({ message: 'Person not found' });
        res.json({ message: 'Person deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export default {
    getAllPeople,
    getPersonImage,
    getPersonById,
    createPerson,
    updatePerson,
    deletePerson
};