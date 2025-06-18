// import React from 'react'

// function About() {
//     return (
//         <div>
//             <h1>About</h1>
//         </div>
//     )
// }

// export default About;
// src/pages/About.jsx
import React from 'react';
import StaffSection from "./StaffSection"; // ✅ Make sure path is correct
import styles from '../styles/about.module.css'; // ✅ Import as a module

const About = () => {
  return (
    <div className={styles['about-bg-slideshow']}>
      <div className={styles['about-bg-slide'] + ' ' + styles['about-bg1']}></div>
      <div className={styles['about-bg-slide'] + ' ' + styles['about-bg2']}></div>
      <div className={styles['about-container']}>
        <h1 className={styles['about-heading']}>About Us</h1>
        {/* <p className={styles['about-description']}>
        </p> */}
        <StaffSection />
      </div>
    </div>
  );
};

export default About;
