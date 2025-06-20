const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    photoSphere: { type: String },
    warden: { type: mongoose.Schema.Types.ObjectId, ref: 'People', required: true },
    supervisor: { type: mongoose.Schema.Types.ObjectId, ref: 'People', required: true },
    rooms: { type: Number, required: true },
    mess: { type: String },
    other_facilities: { type: [String] }
});

module.exports = mongoose.model('Hostel', hostelSchema); 