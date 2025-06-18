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

import React from 'react';
import styles from '../styles/hostels/hostelcard.module.css';

const HostelCard = ({ url, image, text, warden, supervisor, rooms, mess }) => {
  return (
    <a href={url} className={styles.card} target="_blank" rel="noopener noreferrer">
      <div className={styles.imageWrapper}>
        <img src="https://hostels.nitk.edu.in/static/media/h3.34954c81.jpg" alt={text} className={styles.image} />
      </div>
      <div className={styles.info}>
        <h2 className={styles.title}>{text}</h2>
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