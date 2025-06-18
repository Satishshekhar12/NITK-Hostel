import React, { useState } from "react";
import data from "../PeopleData/wardens.json";
import "../card.css";
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
			<div className={`cards ${activeCard !== null ? "showing" : ""}`}>
				{data.wardens.map((card, index) => (
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

export default Representatives;

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
