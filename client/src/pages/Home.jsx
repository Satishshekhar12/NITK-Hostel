import React from 'react'
import LandingImage from '../assets/LandingImage.svg'
import U from '../assets/U.svg'
import Plan from '../assets/paper_airplane.svg'
import Pic1 from '../assets/572b0d52-51ad-48a3-b14d-df17b4cfa1ce.jpeg'
import Pic2 from '../assets/2f5094d3-29ad-4eaf-9207-191895ff36e6.jpeg'
import Pic3 from '../assets/3abe4a68-ccbf-456d-835b-c500a6c4c876.jpeg'
import Pic4 from '../assets/Surathkal_Lighthouse1.jpg'
import styles from '../styles/home.module.css'

function Home() {
    return (
        <>
            <div className={styles.body}>
                <div className={styles.header}>
                    <div className={styles.U}>    
                        <img src={U}/>
                    </div>

                    <div className={styles.Plane}>
                        <img src={Plan}/>
                    </div>

                    <div className={styles.text}>
                        <h1>NITK</h1>
                        <h3>HOSTELS</h3>
                    </div>

                    <div className={styles.landingImage}>
                        <img src={LandingImage}/>
                    </div>
                </div>
                <div className={styles.slantedDiv}>
                    <div className={styles.events}>
                        <div className={styles.eventText}>
                            <h1>Events to Remember</h1>
                            <p>-Each event, a chapter in our story -lets celebrate the me</p>
                        </div>
                        <div className={styles.eventImage}>
                            <div className={styles.eventImageContainer1}>
                                <div className={styles.top1}>
                                    <img src={Pic1}/>
                                </div>
                                <div className={styles.top2}>
                                    <img src={Pic2} />
                                </div>
                            </div>
                            <div className={styles.eventImageContainer2}>
                                <div className={styles.bottom1}>
                                    <img src={Pic4} />
                                </div>
                                <div className={styles.bottom2}>
                                    <img src={Pic3} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    
                </div>
            </div>
        </>
    )
}

export default Home;