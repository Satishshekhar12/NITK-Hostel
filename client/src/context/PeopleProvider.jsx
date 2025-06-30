import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from '../api/axios';
import toast from 'react-hot-toast';

const PeopleContext = createContext();

export const usePeople = () => useContext(PeopleContext);

export const PeopleProvider = ({ children }) => {
    const [people, setPeople] = useState([]);
    const [shouldFetchData, setShouldFetchData] = useState(true);

    const fetchPeople = useCallback(async () => {
        toast.promise(
            async () => {
                const response = await axios.get('/api/people');
                setPeople(response.data);
                setShouldFetchData(false);
            },
            {
                loading: 'Loading...',
                success: () => {
                    return null;
                },
                error: (error) => {
                    setPeople([]);
                    return error.response.data.message || 'Error fetching people';
                },
            }
        );
    }, []);

    const fetchPeopleImage = useCallback(async (id) => {
        try {
            console.log("fetching image for", id);
            const response = await axios.get(`/api/people/image/${id}`);
            console.log("response", response);
            // set image to person with id=id
            setPeople(prevPeople => {
                const updatedPeople = prevPeople.map(person => {
                    if (person._id === id) {
                        return {
                            ...person,
                            image: response.data || null
                        };
                    }
                    return person;
                });
                return updatedPeople;
            });
        } catch (error) {
            console.error('Error fetching people image:', error);
            return null;
        }
    }, []);

    return (
        <PeopleContext.Provider value={{ people, fetchPeople, fetchPeopleImage, shouldFetchData }}>
            {children}
        </PeopleContext.Provider>
    );
}