import React, { useEffect, useState } from "react";
// import data from "../PeopleData/wardens.json";
import styles from "../../../styles/people/card.module.css";
import Card from "../card.jsx";
import Header from "../Header/Header.jsx";

const Representatives = () => {
	const [activeCard, setActiveCard] = useState(null);
	const [wardens, setWardens] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("http://localhost:5000/api/people");
				const data = await response.json();
				const wardenData = data.filter((it) => it.role === "warden");
				setWardens(wardenData);
			} catch (error) {
				console.log(error);
			} finally {
				setLoading(false);
			}
		};
		fetchData();
	}, []);

	const handleCardClick = (index) => {
		setActiveCard((prevActive) => (prevActive === index ? null : index));
	};

	return (
		<>
			<Header>Representatives</Header>
			{loading ? (
				<div className={styles.loadingContainer}>
					<div className={styles.pulse}></div>
					<p className={styles.loadingText}>Fetching Data...</p>
				</div>
			) : (
				<div
					className={`${styles.cards} ${
						activeCard !== null ? styles.showing : ""
					}`}
				>
					{wardens.map((card, index) => (
						<Card
							key={index}
							title={card.name}
							subtitle={card.designation}
							image={card.image} // Ensure image path is correct
							number={card.number}
							email={card.email}
							link={card.contact}
							isActive={activeCard === index}
							onClick={() => handleCardClick(index)}
						/>
					))}
				</div>
			)}
		</>
	);
};

export default Representatives;

//last code -
/*
import React, { useState } from "react";
import data from "../PeopleData/wardens.json"; //old fetched from local data ,now i have to do from this api ,have seperate code for other like staff(dont need that right now ) ,first help me to fetch for this representative(warden role)
import styles from "../../../styles/people/card.module.css";
import Card from "../card.jsx";
import Header from "../Header/Header.jsx";

const Representatives = () => {
	const [activeCard, setActiveCard] = useState(null);

	const handleCardClick = (index) => {
		setActiveCard((prevActive) => (prevActive === index ? null : index));
	};

	return (
		<>
			<Header>Representatives</Header>
			<div className={`${styles.cards} ${activeCard !== null ? styles.showing : ""}`}>
				{data.wardens.map((card, index) => (
					<Card
						key={index}
						title={card.name}
						subtitle={card.designation}
						// image={`/images/${card.img}`} // Ensure image path is correct
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

export default Represen
*/

// import React , {useState} from "react";
// // import cardData from "./data.js";
// import data from "../PeopleData/wardens.json"
// import "../PeopleCard.css";
// import Card from "../PeopleCard.jsx";

// const CardGrid = () => {
//   const [activeCard, setActiveCard] = useState(null);

//   const handleCardClick = (id) => {
//     setActiveCard((prevActive) => (prevActive === id ? null : id));
//   };

// 	return (
// 		<div className={`cards ${activeCard !== null ? "showing" : ""}`}>
// 			{cardData.map((card) => (
// 				<Card
// 					key={card.id}
// 					title={card.title}
// 					subtitle={card.subtitle}
// 					image={card.image}
// 					description={card.description}
// 					link={card.link}
//           isActive={activeCard === card.id}
//           onClick={() => handleCardClick(card.id)}
// 				/>
// 			))}
// 		</div>
// 	);
// };

// export default CardGrid;
