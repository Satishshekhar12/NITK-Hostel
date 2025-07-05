/* old code snippet 
import mongoose from 'mongoose';

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

const Hostel = mongoose.model('Hostel', hostelSchema);
export default Hostel; 

*/

import mongoose from "mongoose";

const hostelSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			unique: true,
			trim: true,
		},
		image: {
			type: String,
			default: "",
		},
		photoSphere: {
			type: String,
			default: "",
		},
		warden: {
			type: String, // Changed from ObjectId to String to allow any name
			required: true,
		},
		supervisor: {
			type: String, // Changed from ObjectId to String to allow any name
			required: true,
		},
		rooms: {
			type: Number,
			required: true,
			min: 1,
		},
		mess: {
			type: String,
			default: "",
		},
		other_facilities: {
			type: [String],
			default: [],
		},
	},
	{
		timestamps: true,
	}
);

const Hostel = mongoose.model("Hostel", hostelSchema);
export default Hostel;
