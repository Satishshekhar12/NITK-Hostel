// MUI card component
import React, { useEffect, useState, useRef } from 'react';
import { usePeople } from '../../context/PeopleProvider';
import styles from '../../styles/admin/People.module.css';
import PeopleForm from './PeopleForm';
import PeopleCard from './PeopleCard';

const People = () => {
    const { people, fetchPeople, fetchPeopleImage, shouldFetchData } = usePeople();
    const [selectedRole, setSelectedRole] = useState('supervisor');
    const [selectedPerson, setSelectedPerson] = useState(null);
    const [isFormOpen, setIsFormOpen] = useState(false);

    useEffect(() => {
        if (shouldFetchData) {
            fetchPeople();
        }
    }, [fetchPeople, shouldFetchData]);

    const filteredPeople = people.filter(person => person.role === selectedRole);

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>People</h1>
            {isFormOpen && <PeopleForm selectedPerson={selectedPerson} />}
            {!isFormOpen && (
                <>
                    <div className={styles.filterButtons}>
                    <button
                        className={selectedRole === 'supervisor' ? styles.activeFilterBtn : styles.filterBtn}
                        onClick={() => setSelectedRole('supervisor')}
                        >
                        Supervisor
                    </button>
                    <button
                        className={selectedRole === 'warden' ? styles.activeFilterBtn : styles.filterBtn}
                        onClick={() => setSelectedRole('warden')}
                    >
                        Warden
                    </button>
                    <button
                        className={selectedRole === 'staff' ? styles.activeFilterBtn : styles.filterBtn}
                        onClick={() => setSelectedRole('staff')}
                        >
                        Staff
                    </button>
                </div>
                <div className={styles.peopleList}>
                    {filteredPeople.map((person) => (
                        <PeopleCard
                            key={person._id}
                            _id={person._id}
                            name={person.name}
                            designation={person.designation}
                            email={person.email}
                            phone={person.phone}
                            image={person.image}
                            onEdit={() => {setSelectedPerson(person); setIsFormOpen(true)}}
                            onDelete={() => {}}
                            fetchPeopleImage={fetchPeopleImage}
                        />
                    ))}
                </div>
            </>
            )}
        </div>
    );
};



export default People;