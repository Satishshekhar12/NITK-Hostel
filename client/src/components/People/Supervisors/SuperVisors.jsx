import React, { useState } from "react";
import data from "../PeopleData/supervisor.json";
import styles from "../../../styles/people/card.module.css";
import Card from "../card.jsx";
import Header from "../Header/Header.jsx";

const SuperVisors = () => {
	const [activeCard, setActiveCard] = useState(null);

	const handleCardClick = (index) => {
		setActiveCard((prevActive) => (prevActive === index ? null : index));
	};

	return (
		<>
			<Header>Supervisors</Header>

			<div className={`${styles.cards} ${activeCard !== null ? styles.showing : ""}`}>
				{data.supervisors.map((card, index) => (
					<Card
						key={index}
						title={card.name}
						subtitle={card.designation}
						image={`/images/${card.img}`} // Ensure image path is correct
						number={card.number}
						email={card.email}
						link={card.contact}
						isActive={activeCard === index}
						onClick={() => handleCardClick(index)}
					/>
				))}
			</div>
		</>
	);
};

export default SuperVisors;
