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

const HostelCard = ({ _id, url, name, warden, supervisor, rooms, mess }) => {
  const [image, setImage] = useState('loading.gif');
  const cardRef = useRef(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const res = await axios.get(`/api/hostels/image/${_id}`);
        setImage(res.data);
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
  }, [_id]);

  return (
    <a ref={cardRef} href={url} className={styles.card} target="_blank" rel="noopener noreferrer">
      <div className={styles.imageWrapper}>
        <img src={image} alt={name} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.name}>{name}</h2>
        <p><span className={styles.label}>Warden:</span> {warden}</p>
        <p><span className={styles.label}>Supervisor:</span> {supervisor}</p>
        <p><span className={styles.label}>Rooms:</span> {rooms}</p>
        {mess && (
          <p><span className={styles.label}>Mess:</span> {mess}</p>
        )}
      </div>
    </a>
  );
};

export default HostelCard;