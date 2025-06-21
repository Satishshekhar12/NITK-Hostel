import React, { useState } from "react";
// import data from "../PeopleData/supervisor.json";
import styles from "../../../styles/people/card.module.css";
import Card from "../card.jsx";
import Header from "../Header/Header.jsx";
import { useEffect } from "react";

const SuperVisors = () => {
	const [activeCard, setActiveCard] = useState(null);
	const [supervisor, setSupervisor] = useState([]);

	useEffect(() =>{
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:5000/api/people")
				const data = await response.json();
				const supervisorData = data.filter((it) => it.role === "supervisor" ) ;
				setSupervisor(supervisorData)
			} catch (error) {
				console.log(error);	
			}
		};
		fetchData();
	},[])

	const handleCardClick = (index) => {
		setActiveCard((prevActive) => (prevActive === index ? null : index));
	};

	return (
		<>
			<Header>Supervisors</Header>

			<div className={`${styles.cards} ${activeCard !== null ? styles.showing : ""}`}>
				{supervisor.map((card, index) => (
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
