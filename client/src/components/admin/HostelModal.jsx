import React, { useState, useEffect } from "react";
import styles from "../../styles/admin/HostelModal.module.css";
// import styles from "./HostelModal.module.css";

const HostelModal = ({ mode, hostel, people, onClose, onSubmit }) => {
	const [formData, setFormData] = useState({
		name: "",
		image: null,
		photoSphere: "",
		wardenId: "",
		supervisorId: "",
		rooms: "",
		mess: "",
		other_facilities: [],
	});

	const [imagePreview, setImagePreview] = useState(null);
	const [facilityInput, setFacilityInput] = useState("");

	useEffect(() => {
		if (mode === "edit" && hostel) {
			// Helper function to get ObjectId from warden/supervisor
			const getPersonId = (person) => {
				if (!person) return "";
				// If person is populated (object), return the _id
				if (typeof person === "object" && person._id) {
					return person._id;
				}
				// If person is just an ObjectId string, return it
				if (typeof person === "string") {
					return person;
				}
				return "";
			};

			// Populate form data for editing
			setFormData({
				name: hostel.name || "",
				photoSphere: hostel.photoSphere || "",
				wardenId: getPersonId(hostel.warden),
				supervisorId: getPersonId(hostel.supervisor),
				rooms: hostel.rooms?.toString() || "",
				mess: hostel.mess || "",
				other_facilities: hostel.other_facilities || [],
			});

			if (hostel.image) {
				setImagePreview(hostel.image);
			}
		}
	}, [mode, hostel, people]);

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleImageChange = (e) => {
		const file = e.target.files[0];
		if (file) {
			setFormData({
				...formData,
				image: file,
			});

			// Create preview
			const reader = new FileReader();
			reader.onload = () => {
				setImagePreview(reader.result);
			};
			reader.readAsDataURL(file);
		}
	};

	const addFacility = () => {
		if (
			facilityInput.trim() &&
			!formData.other_facilities.includes(facilityInput.trim())
		) {
			setFormData({
				...formData,
				other_facilities: [...formData.other_facilities, facilityInput.trim()],
			});
			setFacilityInput("");
		}
	};

	const removeFacility = (facility) => {
		setFormData({
			...formData,
			other_facilities: formData.other_facilities.filter((f) => f !== facility),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const submitData = {
			name: formData.name,
			image: formData.image,
			photoSphere: formData.photoSphere,
			warden: formData.wardenId, // Send ObjectId
			supervisor: formData.supervisorId, // Send ObjectId
			rooms: parseInt(formData.rooms),
			mess: formData.mess,
			other_facilities: formData.other_facilities,
		};
		console.log("Submitting hostel data:", submitData); // Debug log
		onSubmit(submitData);
	};

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modal}>
				<div className={styles.modalHeader}>
					<h3>{mode === "edit" ? "Edit Hostel" : "Add New Hostel"}</h3>
					<button className={styles.closeButton} onClick={onClose}>
						×
					</button>
				</div>

				<form onSubmit={handleSubmit} className={styles.form}>
					<div className={styles.formGroup}>
						<label>Hostel Name *</label>
						<input
							type="text"
							name="name"
							value={formData.name}
							onChange={handleChange}
							required
						/>
					</div>

					<div className={styles.formRow}>
						<div className={styles.formGroup}>
							<label>Warden *</label>
							<select
								name="wardenId"
								value={formData.wardenId}
								onChange={handleChange}
								required
							>
								<option value="">Select Warden</option>
								{people
									.filter((p) => p.role === "warden")
									.map((person) => (
										<option key={person._id} value={person._id}>
											{person.name}
										</option>
									))}
							</select>
						</div>

						<div className={styles.formGroup}>
							<label>Supervisor *</label>
							<select
								name="supervisorId"
								value={formData.supervisorId}
								onChange={handleChange}
								required
							>
								<option value="">Select Supervisor</option>
								{people
									.filter((p) => p.role === "supervisor")
									.map((person) => (
										<option key={person._id} value={person._id}>
											{person.name}
										</option>
									))}
							</select>
						</div>
					</div>

					<div className={styles.formGroup}>
						<label>Number of Rooms *</label>
						<input
							type="number"
							name="rooms"
							value={formData.rooms}
							onChange={handleChange}
							min="1"
							required
						/>
					</div>

					<div className={styles.formGroup}>
						<label>Image</label>
						<div className={styles.fileInputWrapper}>
							<input
								type="file"
								name="image"
								accept="image/*"
								onChange={handleImageChange}
								className={styles.fileInput}
							/>
							<button type="button" className={styles.browseButton}>
								Browse Files
							</button>
							<span className={styles.fileName}>
								{formData.image ? formData.image.name : "No file selected"}
							</span>
						</div>
						{imagePreview && (
							<div className={styles.imagePreview}>
								<img src={imagePreview} alt="Hostel preview" />
							</div>
						)}
					</div>

					<div className={styles.formGroup}>
						<label>360° Photo Sphere URL</label>
						<input
							type="url"
							name="photoSphere"
							value={formData.photoSphere}
							onChange={handleChange}
							placeholder="Google Maps embed URL"
						/>
					</div>

					<div className={styles.formGroup}>
						<label>Mess</label>
						<input
							type="text"
							name="mess"
							value={formData.mess}
							onChange={handleChange}
							placeholder="Mess name or details"
						/>
					</div>

					<div className={styles.formGroup}>
						<label>Other Facilities</label>
						<div className={styles.facilityInput}>
							<input
								type="text"
								value={facilityInput}
								onChange={(e) => setFacilityInput(e.target.value)}
								placeholder="Add facility"
							/>
							<button type="button" onClick={addFacility}>
								Add
							</button>
						</div>
						<div className={styles.facilities}>
							{formData.other_facilities.map((facility, index) => (
								<span key={index} className={styles.facility}>
									{facility}
									<button
										type="button"
										onClick={() => removeFacility(facility)}
									>
										×
									</button>
								</span>
							))}
						</div>
					</div>

					<div className={styles.modalActions}>
						<button
							type="button"
							onClick={onClose}
							className={styles.cancelButton}
						>
							Cancel
						</button>
						<button type="submit" className={styles.submitButton}>
							{mode === "edit" ? "Update Hostel" : "Add Hostel"}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default HostelModal;
