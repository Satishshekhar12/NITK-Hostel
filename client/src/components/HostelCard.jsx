// import styles from '../styles/hostels.module.css'

// function HostelCard({hostel}) {
//     return ( 
//         <div className={styles.hostelCard}>
//             <br />
//             <br />
//             <img src="https://hostels.nitk.edu.in/static/media/h3.34954c81.jpg" alt={hostel.text} />
//             <div className={styles.hostelCardContent}>
//                 <h2>{hostel.text}</h2>
//                 {/* <p>{hostel.warden}</p>
//                 <p>{hostel.supervisor}</p>
//                 <p>{hostel.rooms}</p>
//                 <p>{hostel.mess}</p> */}
//             </div>
//             {/* <iframe src={hostel.photoSphere} title={hostel.text} /> */}
//         </div>
//      );
// }

// export default HostelCard;

import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/hostels/hostelcard.module.css';
import axios from '../api/axios';

const HostelCard = ({ hostel }) => {
  const [image, setImage] = useState('loading.gif');
  const cardRef = useRef(null);

  useEffect(() => {
    // console.log("Hostel Images: ", hostel.image);
    if (hostel.image) {
      setImage(hostel.image);
      return;
    }
    // console.log("Fetching Image");
    const fetchImage = async () => {
      try {
        // console.log("Fetching Image");
        const res = await axios.get(`/api/hostels/image/${hostel._id}`).catch(err => {
          console.log(err);
        });
        if (res) {
          hostel.image = res.data;
          setImage(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchImage();
        }
      });
    });
    if (cardRef.current) {
      observer.observe(cardRef.current);
    }
    return () => observer.disconnect();
  }, [hostel._id]);

  return (
    <a ref={cardRef} href={hostel.url} className={styles.card} target="_blank" rel="noopener noreferrer">
      <div className={styles.imageWrapper}>
        <img src={image} alt={hostel.name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{hostel.name}</h2>
        <p><span className={styles.label}>Warden:</span> {hostel.warden}</p>
        <p><span className={styles.label}>Supervisor:</span> {hostel.supervisor}</p>
        <p><span className={styles.label}>Rooms:</span> {hostel.rooms}</p>
        {hostel.mess && (
          <p><span className={styles.label}>Mess:</span> {hostel.mess}</p>
        )}
      </div>
    </a>
  );
};

export default HostelCard;