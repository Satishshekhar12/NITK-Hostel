// Card.js
import React, { useState } from "react";
import styles from "../../styles/people/card.module.css"; // Import the CSS module
import UserProfileImage from "./PeopleData/defaultImage.jpg";

const Card = ({
	title,
	subtitle,
	image,
	// description,
	link,
	isActive,
	onClick,
	number,
	email,
}) => {
	const [isShowing, setIsShowing] = useState(false);

	const handleClick = () => {
		setIsShowing((prev) => !prev);
	};

	return (
		
		<div
	className={`${styles.card} ${isActive ? styles.show : ""}`}
	style={{ zIndex: isActive ? 1 : 0 }}
	onClick={onClick}
>
	<div
		className={styles["card__image-holder"]}
		style={{
			display: "flex",
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
		}}
	>
		<img className={styles["card__image"]} src={image ? image : UserProfileImage} alt={title} />
	</div>

	<div className={styles["card-title"]}>
		<a className={`${styles["toggle-info"]} ${styles.btn}`}>
			<span className={styles.left}></span>
			<span className={styles.right}></span>
		</a>
		<h2>
			{title}
			<small>{subtitle}</small>
		</h2>
	</div>

	<div className={`${styles["card-flap"]} ${styles.flap1} ${isShowing ? styles.open : ""}`}>
		<div className={styles["card-description"]}>
			{(number || email) ? (
				<>
					Contact: {number || "N/A"}
					<br />
					Email:{" "}
					<a href={`mailto:${email}`} className={styles["email-link"]}>
						{email}
					</a>
				</>
			) : (
				<span>--</span>
			)}
		</div>

		{link && (
			<div className={`${styles["card-flap"]} ${styles.flap2} ${isShowing ? styles.open : ""}`}>
				<div className={styles["card-actions"]}>
					<a
						href={link}
						className={styles.btn}
						target="_blank"
						rel="noopener noreferrer"
					>
						Read more
					</a>
				</div>
			</div>
		)}
	</div>
</div>

	);
};

export default Card;



		/*
		// <div
		// 	className={`${styles.card} ${isActive ? styles.show : ""}`}
		// 	style={{ zIndex: isActive ? 1 : 0 }}
		// 	onClick={onClick}
		// >
		// 	<div
		// 		className={styles.cardImageHolder}
		// 		style={{
		// 			display: "flex",
		// 			flex: 1,
		// 			justifyContent: "center",
		// 			alignItems: "center",
		// 		}}
		// 	>
		// 		<img className="card__image" src={image || UserProfileImage} alt={title} />
		// 	</div>
		// 	<div className={styles.cardTitle}>
		// 		<a className={`${styles.toggleInfo} ${styles.btn}`}>
		// 			<span className={styles.left}></span>
		// 			<span className={styles.right}></span>
		// 		</a>
		// 		<h2>
		// 			{title}
		// 			<small>{subtitle}</small>
		// 		</h2>
		// 	</div>
		// 	<div className={`${styles.cardFlap} ${styles.flap1}`}>
		// 		<div className={styles.cardDescription}>
		// 			{(number || email) ? (
		// 				<>
		// 					Contact: {number || "N/A"}
		// 					<br />
		// 					Email:{" "}
		// 					<a href={`mailto:${email}`} className="email-link">
		// 						{email}
		// 					</a>
		// 				</>
		// 			) : (
		// 				<span>--</span>
		// 			)}
		// 		</div>
		// 		{link && (
		// 			<div className={`${styles.cardFlap} ${styles.flap2}`}>
		// 				<div className={styles.cardActions}>
		// 					<a
		// 						href={link}
		// 						className={styles.btn}
		// 						target="_blank"
		// 						rel="noopener noreferrer"
		// 					>
		// 						Read more
		// 					</a>
		// 				</div>
		// 			</div>
		// 		)}
		// 	</div>
		// </div> 
		// */