// Card.js
import React, { useState } from "react";
import "./card.css"; // Import the CSS
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
			className={`card ${isActive ? "show" : ""}`}
			style={{ zIndex: isActive ? 1 : 0 }}
			onClick={onClick}
		>
			<div
				className="card__image-holder"
				style={{
					display: "flex",
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<img className="card__image" src={UserProfileImage } alt={title} />
			</div>
			<div className="card-title">
				<a href="#" className="toggle-info btn">
					<span className="left"></span>
					<span className="right"></span>
				</a>
				<h2>
					{title}
					<small>{subtitle}</small>
				</h2>
			</div>
			<div className={`card-flap flap1 ${isShowing ? "open" : ""}`}>
				<div className="card-description">
					{(number || email) ? (
						<>
							Contact: {number || N/A}
							<br />
							Email:{" "}
							<a href={`mailto:${email}`} className="email-link">
								{email}
							</a>
						</>
					) : (
						<span>--</span>
					)}
				</div>
				{link && (
					<div className={`card-flap flap2 ${isShowing ? "open" : ""}`}>
						<div className="card-actions">
							<a
								href={link}
								className="btn"
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
