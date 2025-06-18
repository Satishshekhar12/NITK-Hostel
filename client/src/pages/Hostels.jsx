import hostels from '../data/hostels.json'
import HostelCard from '../components/HostelCard'
import styles from '../styles/hostels.module.css'

function Hostels() {
    return ( 
        <div className={styles.heroSection}>
            <div className={styles.titleSection}>
                <h1>Hostels</h1>
            </div>
            <div className={styles.hostelsContainer}>
                {hostels.HostelBlocks.map((hostel) => (
                    <HostelCard key={hostel.id} {...hostel} />
                ))}
            </div>
        </div>
     );
}

export default Hostels;