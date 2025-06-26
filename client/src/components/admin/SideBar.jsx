import { useEffect } from 'react';
import styles from '../../styles/admin/sidebar.module.css';
import Button from './Button';

function SideBar({selectedEntity, setSelectedEntity}) {
    return (
        <div className={styles.sideBarContainer}>
            {/* <div className={styles.header}>
                <h1>Entities</h1>
            </div> */}
            <div className={styles.sidebar}>
                <Button selected={selectedEntity === 'people'} text="People" onClickFunc={() => selectedEntity === 'people' ? setSelectedEntity(null) : setSelectedEntity('people')} />
                <Button selected={selectedEntity === 'hostels'} text="Hostels" onClickFunc={() => selectedEntity === 'hostels' ? setSelectedEntity(null) : setSelectedEntity('hostels')} />
                <Button selected={selectedEntity === 'events'} text="Events" onClickFunc={() => selectedEntity === 'events' ? setSelectedEntity(null) : setSelectedEntity('events')} />
                <Button selected={selectedEntity === 'notifications'} text="Notifications" onClickFunc={() => selectedEntity === 'notifications' ? setSelectedEntity(null) : setSelectedEntity('notifications')} />
            </div>
        </div>
    );
}

export default SideBar;