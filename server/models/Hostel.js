const mongoose = require('mongoose');

const hostelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String },
    photoSphere: { type: String },
    warden: { type: [String], required: true },
    supervisor: { type: [String], required: true },
    rooms: { type: Number, required: true },
    mess: { type: String },
    facilities: { type: [String] }
});
// {
//     "url": "h1",
//     "image": "h1.jpg",
//     "photoSphere": "https://www.google.com/maps/embed?pb=!4v1651927475531!6m8!1m7!1sCAoSLEFGMVFpcE9ZVk5wWjR0VHFBUEd4OXRzajBUZEdRU2Jvb1BKU2U0QnB0dURf!2m2!1d13.0080048!2d74.7971374!3f98.79417445038041!4f2.6441602604952976!5f0.7820865974627469",
//     "text": "Karavali (I Block)",
//     "warden": "Dr. Palanisamy T",
//     "supervisor": "Kaushik",
//     "rooms": "76",
//     "mess": ""
// },
module.exports = mongoose.model('Hostel', hostelSchema); 