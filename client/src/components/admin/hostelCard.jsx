import React from "react";
import styles from "../../styles/admin/HostelCard.module.css";

// import styles from "./HostelCard.module.css";

const HostelCard = ({ hostel, people, onEdit, onDelete }) => {
	// Helper function to get person name by ID or return the string if it's already a name
	const getPersonName = (personIdOrName) => {
		// If it's a 24-character hex string (ObjectId), look it up in people array
		if (
			typeof personIdOrName === "string" &&
			personIdOrName.length === 24 &&
			/^[0-9a-fA-F]{24}$/.test(personIdOrName)
		) {
			const person = people.find((p) => p._id === personIdOrName);
			return person ? person.name : "Unknown";
		}
		// Otherwise, it's already a name string
		return personIdOrName || "Unknown";
	};

	return (
		<div className={styles.card}>
			<div className={styles.cardHeader}>
				<h3 className={styles.hostelName}>{hostel.name}</h3>
				<div className={styles.actions}>
					<button
						className={styles.editButton}
						onClick={() => onEdit(hostel)}
						title="Edit Hostel"
					>
						✏️
					</button>
					<button
						className={styles.deleteButton}
						onClick={() => onDelete(hostel._id)}
						title="Delete Hostel"
					>
						🗑️
					</button>
				</div>
			</div>

			<div className={styles.cardBody}>
				<div className={styles.infoRow}>
					<span className={styles.label}>Rooms:</span>
					<span className={styles.value}>{hostel.rooms}</span>
				</div>
				<div className={styles.infoRow}>
					<span className={styles.label}>Warden:</span>
					<span className={styles.value} title={getPersonName(hostel.warden)}>
						{getPersonName(hostel.warden)}
					</span>
				</div>
				<div className={styles.infoRow}>
					<span className={styles.label}>Supervisor:</span>
					<span
						className={styles.value}
						title={getPersonName(hostel.supervisor)}
					>
						{getPersonName(hostel.supervisor)}
					</span>
				</div>
				{hostel.mess && (
					<div className={styles.infoRow}>
						<span className={styles.label}>Mess:</span>
						<span className={styles.value} title={hostel.mess}>
							{hostel.mess}
						</span>
					</div>
				)}
			</div>

			{hostel.photoSphere && (
				<div className={styles.photoSphere}>
					<iframe
						src={hostel.photoSphere}
						allowFullScreen=""
						loading="lazy"
						title={`${hostel.name} 360° View`}
					></iframe>
				</div>
			)}

			<div className={styles.cardFooter}>
				<p className={styles.lastUpdated}>
					Last updated:{" "}
					{new Date(hostel.updatedAt || Date.now()).toLocaleDateString()}
				</p>
			</div>
		</div>
	);
};

export default HostelCard;
