import React, { useState, useEffect } from "react";
import styles from "../../styles/admin/HostelModal.module.css";
// import styles from "./HostelModal.module.css";

const HostelModal = ({ mode, hostel, people, onClose, onSubmit }) => {
	const [formData, setFormData] = useState({
		name: "",
		image: null,
		photoSphere: "",
		wardenName: "",
		supervisorName: "",
		rooms: "",
		mess: "",
		other_facilities: [],
	});

	const [imagePreview, setImagePreview] = useState(null);
	const [facilityInput, setFacilityInput] = useState("");

	useEffect(() => {
		if (mode === "edit" && hostel) {
			// Helper function to get person name by ID or return the string if it's already a name
			const getPersonName = (personIdOrName) => {
				// If it's a 24-character hex string (ObjectId), look it up in people array
				if (
					typeof personIdOrName === "string" &&
					personIdOrName.length === 24 &&
					/^[0-9a-fA-F]{24}$/.test(personIdOrName)
				) {
					const person = people.find((p) => p._id === personIdOrName);
					return person ? person.name : personIdOrName;
				}
				// Otherwise, it's already a name string
				return personIdOrName || "";
			};

			// Populate form data for editing
			setFormData({
				name: hostel.name || "",
				photoSphere: hostel.photoSphere || "",
				wardenName: getPersonName(hostel.warden),
				supervisorName: getPersonName(hostel.supervisor),
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
			warden: formData.wardenName, // Send as string name, not ObjectId
			supervisor: formData.supervisorName, // Send as string name, not ObjectId
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
							<input
								type="text"
								name="wardenName"
								value={formData.wardenName}
								onChange={handleChange}
								list="wardenOptions"
								placeholder="Type or select warden"
								required
							/>
							<datalist id="wardenOptions">
								{people
									.filter((p) => p.role === "warden")
									.map((person) => (
										<option key={person._id} value={person.name} />
									))}
							</datalist>
						</div>

						<div className={styles.formGroup}>
							<label>Supervisor *</label>
							<input
								type="text"
								name="supervisorName"
								value={formData.supervisorName}
								onChange={handleChange}
								list="supervisorOptions"
								placeholder="Type or select supervisor"
								required
							/>
							<datalist id="supervisorOptions">
								{people
									.filter((p) => p.role === "supervisor")
									.map((person) => (
										<option key={person._id} value={person.name} />
									))}
							</datalist>
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
