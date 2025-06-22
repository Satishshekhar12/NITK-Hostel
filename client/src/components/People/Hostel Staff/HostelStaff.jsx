import React , {useState} from "react";
// import data from "../PeopleData/staff.json"
import styles from "../../../styles/people/card.module.css";
import Card from "../card.jsx";
import Header from "../Header/Header.jsx";
import { useEffect } from "react";

const HostelStaff = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [staff, setStaff] = useState([]);

  useEffect(()=>{
    const fetchData = async () => {
      try {
        const responseData = await fetch("http://localhost:5000/api/people")
        const data = await responseData.json();
        const staffData = data.filter((it)=> it.role === 'staff')
        setStaff(staffData);
      } catch (error) {
        console.error();
      }
    }
    fetchData();
  },[])

  const handleCardClick = (index) => {
    setActiveCard((prevActive) => (prevActive === index ? null : index));
  };

	return (
		<>
			<Header>Hostel Staff</Header>
		<div className={`${styles.cards} ${activeCard !== null ? styles.showing : ""}`}>
			   {staff.map((card, index) => (
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

export default HostelStaff;