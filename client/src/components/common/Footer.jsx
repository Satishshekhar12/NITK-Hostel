import React from 'react'
import styles from '../../styles/common/footer.module.css'
import pic1 from '../../assets/footer/icons8-envelope-100.png'
import pic2 from '../../assets/footer/icons8-sent-24.png'
import pic3 from '../../assets/footer/icons8-right-arrow-100.png'
import pic4 from '../../assets/footer/Screenshot 2025-06-18 161827.png'
import pic5 from '../../assets/footer/icons8-facebook-100.png'
import pic6 from '../../assets/footer/icons8-x-100.png'
import pic7 from '../../assets/footer/icons8-instagram-100.png'
import pic8 from '../../assets/footer/icons8-youtube-100.png'

function Footer() {
    return (
        <div className={styles.main}>
            <div className={styles.upper}>
                <div className={styles.box}>
                    <div className={styles.imgdiv}>
                        <div className={styles.msg}>
                            <img src={pic1} />
                        </div>
                    </div>
                    <div className={styles.paradiv}>
                        <p>
                            <div className={styles.heading}>
                                <span>
                                    GET IN TOUCH
                                </span>
                            </div>
                            <br />
                            <div className={styles.discription}>
                                <span>
                                    Lorem ipsum dolor sit amet consectetur adip.
                                </span>
                            </div>
                        </p>
                    </div>
                    <div className={styles.search}>
                        <div className={styles.send}>
                            <img src={pic2} />
                        </div>
                        <div className={styles.searchbox}>
                            <input type="text" placeholder="Your email address" />
                        </div>
                        <div className={styles.rightarrow}>
                            <button>
                                <div className={styles.arrowimg}>
                                    <img src={pic3} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className={styles.lowerparadiv}>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis quibusdam
                        pariatur
                        distinctio!
                    </p>
                </div>

            </div>
            <div className={styles.lower}>
                <div className={styles.lowerbox}>
                    <div className={styles.first}>
                        <div className={styles.ssdiv}>
                            <div className={styles.ss}>
                                <img src={pic4} />
                            </div>
                        </div>
                        <div className={styles.add}>
                            <p >
                                NH 66, Srinivasnagar Surathkal, Mangalore Karnataka 575025
                            </p>
                        </div>
                        <div className={styles.refer}>
                            <p>
                                0824247400
                                <br />
                                registrar@nitk.ac.in
                            </p>
                        </div>
                    </div>
                    <div className={styles.dbox}>
                        <div className={styles.head}>
                            <p >
                                Our Campus
                            </p>
                        </div>
                        <div className={styles.text}>
                            <p>Gallery</p>
                            <p>Guest House(GH)</p>
                            <p>Health Care Centre(HCC)</p>
                            <p>Library</p>
                            <p>Step</p>
                            <p>Virtual Tour</p>
                        </div>
                    </div>
                    <div className={styles.dbox}>
                        <div className={styles.head}>
                            <p>
                                Quick links
                            </p>
                        </div>
                        <div className={styles.text}>
                            <p>TEQIP</p>
                            <p>Career Development Centre(CDC)</p>
                            <p>Departments</p>
                            <p>Intranet</p>
                            <p>IRIS Portal</p>
                            <p>Telephone Directory</p>
                        </div>
                    </div>
                    <div className={styles.dbox}>
                        <div className={styles.head}>
                            <p>
                                General links
                            </p>
                        </div>
                        <div className={styles.text}>
                            <p>Alumni</p>
                            <p>Non Teaching staff Recruitment</p>
                            <p>REO Complaints</p>
                            <p>Internal Complaints</p>
                            <p>National Career Service Portal</p>
                            <p>RTI</p>
                            <p>Tenders and Quotations</p>
                        </div>
                        <div className={styles.followdiv}>
                            <div className={styles.follow}>
                                <p>
                                    Follow us On
                                </p>
                            </div>
                            <div className={styles.imggrpdiv}>
                                <div className={styles.imgdiv}>
                                    <div className={styles.im}>
                                        <img src={pic5} />
                                    </div>
                                </div>
                                <div className={styles.imgdiv}>
                                    <div className={styles.im}>
                                        <img src={pic6} />
                                    </div>
                                </div>
                                <div className={styles.imgdiv}>
                                    <div className={styles.im}>
                                        <img src={pic7} />
                                    </div>
                                </div>
                                <div className={styles.imgdiv}>
                                    <div className={styles.im}>
                                        <img src={pic8} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer;