import HostelCard from '../components/HostelCard'
import styles from '../styles/hostels/hostels.module.css'
import { useEffect } from 'react'
import useCachedHostels from '../hooks/useCachedHostels'

function Hostels() {
    const { hostels, loading, error } = useCachedHostels()
    useEffect(() => {
        if (error) {
            console.error('Error loading hostels:', error)
        }
    }, [error])
    return ( 
        <div className={styles.heroSection}>
            <div className={styles.titleSection}>
                <h1>Hostels</h1>
            </div>
            <div className={styles.hostelsContainer}>
            {loading ? (
                    <p>Loading...</p>
                ) : (
                    hostels.map((hostel) => (
                        <HostelCard key={hostel._id} hostel={hostel} />
                    ))
                )}
            </div>
        </div>
     );
}

export default Hostels;