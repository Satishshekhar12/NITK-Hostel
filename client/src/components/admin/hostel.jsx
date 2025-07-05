import React, { useState, useEffect } from "react";
import axios from "../../api/axios";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import HostelCard from "./hostelCard";
import HostelModal from "./HostelModal"; // Unified modal component
import toast from "react-hot-toast";
import styles from "../../styles/admin/Hostel.module.css";

const Hostel = () => {
	const [hostels, setHostels] = useState([]);
	const [loading, setLoading] = useState(true);
	const [showModal, setShowModal] = useState(false);
	const [modalMode, setModalMode] = useState("add"); // "add" or "edit"
	const [selectedHostel, setSelectedHostel] = useState(null);
	const [people, setPeople] = useState([]);
	const [isCollapsed, setIsCollapsed] = useState(false);

	const axiosPrivate = useAxiosPrivate(); // For authenticated requests

	useEffect(() => {
		fetchHostels();
		fetchPeople();
	}, []);

	const fetchHostels = async () => {
		try {
			const response = await axios.get("/api/hostels");
			setHostels(response.data);
		} catch (error) {
			toast.error("Failed to fetch hostels");
			console.error("Error fetching hostels:", error);
		} finally {
			setLoading(false);
		}
	};

	const fetchPeople = async () => {
		try {
			const response = await axios.get("/api/people");
			setPeople(response.data);
		} catch (error) {
			console.error("Error fetching people:", error);
		}
	};

	const handleAddHostel = async (hostelData) => {
		try {
			const response = await axiosPrivate.post("/api/hostels", hostelData);
			setHostels([...hostels, response.data]);
			setShowModal(false);
			toast.success("Hostel added successfully");
		} catch (error) {
			toast.error("Failed to add hostel");
			console.error("Error adding hostel:", error);
		}
	};

	const handleEditHostel = (hostel) => {
		setSelectedHostel(hostel);
		setModalMode("edit");
		setShowModal(true);
	};

	const handleUpdateHostel = async (updatedData) => {
		try {
			const response = await axiosPrivate.put(
				`/api/hostels/${selectedHostel._id}`,
				updatedData
			);
			setHostels(
				hostels.map((h) => (h._id === selectedHostel._id ? response.data : h))
			);
			setShowModal(false);
			setSelectedHostel(null);
			toast.success("Hostel updated successfully");
		} catch (error) {
			toast.error("Failed to update hostel");
			console.error("Error updating hostel:", error);
		}
	};

	const handleDeleteHostel = async (hostelId) => {
		if (window.confirm("Are you sure you want to delete this hostel?")) {
			try {
				await axiosPrivate.delete(`/api/hostels/${hostelId}`);
				setHostels(hostels.filter((h) => h._id !== hostelId));
				toast.success("Hostel deleted successfully");
			} catch (error) {
				toast.error("Failed to delete hostel");
				console.error("Error deleting hostel:", error);
			}
		}
	};

	if (loading) {
		return (
			<div className={styles.loading}>
				<div className={styles.spinner}></div>
				<p>Loading hostels...</p>
			</div>
		);
	}

	return (
		<div className={styles.hostelContainer}>
			<div className={styles.header}>
				<div className={styles.headerTitleArea}>
					<button
						className={styles.collapseButton}
						onClick={() => setIsCollapsed(!isCollapsed)}
						aria-label={isCollapsed ? "Expand" : "Collapse"}
					>
						{isCollapsed ? "+" : "-"}
					</button>
					<h2>Hostel Management</h2>
				</div>
				<button
					className={styles.addButton}
					onClick={() => {
						setModalMode("add");
						setShowModal(true);
					}}
				>
					+ Add Hostel
				</button>
			</div>

			{!isCollapsed && (
				<div className={styles.scrollableContent}>
					<div className={styles.hostelGrid}>
						{hostels.map((hostel) => (
							<HostelCard
								key={hostel._id}
								hostel={hostel}
								people={people}
								onEdit={handleEditHostel}
								onDelete={handleDeleteHostel}
							/>
						))}

						{hostels.length === 0 && !loading && (
							<div className={styles.noData}>
								<p>No hostels found. Add some hostels to get started!</p>
							</div>
						)}
					</div>
				</div>
			)}

			{showModal && (
				<HostelModal
					mode={modalMode}
					hostel={modalMode === "edit" ? selectedHostel : null}
					people={people}
					onClose={() => {
						setShowModal(false);
						setSelectedHostel(null);
					}}
					onSubmit={modalMode === "edit" ? handleUpdateHostel : handleAddHostel}
				/>
			)}
		</div>
	);
};

export default Hostel;
