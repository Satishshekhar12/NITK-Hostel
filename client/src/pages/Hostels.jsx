import hostels from '../data/hostels.json'
import HostelCard from '../components/HostelCard'
import styles from '../styles/hostels/hostels.module.css'
import axios from '../api/axios'
import { useState, useEffect } from 'react'

function Hostels() {
    const [hostels, setHostels] = useState([])
    useEffect(() => {
        axios.get('/api/hostels').then((res) => {
            setHostels(res.data)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return ( 
        <div className={styles.heroSection}>
            <div className={styles.titleSection}>
                <h1>Hostels</h1>
            </div>
            <div className={styles.hostelsContainer}>
                {hostels.map((hostel) => (
                    <HostelCard key={hostel._id} {...hostel} />
                ))}
            </div>
        </div>
     );
}

export default Hostels;