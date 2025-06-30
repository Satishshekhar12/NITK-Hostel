// MUI card component
import React, { useEffect } from 'react';
import { Card, CardContent, Typography, CardActions, Button, Avatar, Box } from '@mui/material';
import { usePeople } from '../../context/PeopleProvider';


const People = () => {
    const { people, fetchPeople, shouldFetchData } = usePeople();
    useEffect(() => {
        if (shouldFetchData) {
            fetchPeople();
        }
    }, [fetchPeople, shouldFetchData]);

    return (
        <Box sx={{ height: '90%', overflowY: 'auto', pr: 1 }}>
            {people.map((person) => (
                <PeopleCard     
                    key={person._id}
                    name={person.name}
                    designation={person.designation}
                    email={person.email}
                    phone={person.phone}
                    image={person.image}
                    onEdit={() => {}}
                    onDelete={() => {}}
                />
            ))}
        </Box>
    )
}

const PeopleCard = ({ name, designation, email, phone, image, onEdit, onDelete }) => {
    return (
        <Card sx={{ display: 'flex', alignItems: 'center', mb: 2, p: 1 }}>
            <Avatar
                src={image}
                alt={name}
                sx={{ width: 56, height: 56, mr: 2 }}
            />
            <Box sx={{ flex: 1 }}>
                <CardContent sx={{ paddingBottom: '8px !important', paddingTop: '8px !important' }}>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="body2" color="text.secondary">{designation}</Typography>
                    <Typography variant="body2" color="text.secondary">{email}</Typography>
                    <Typography variant="body2" color="text.secondary">{phone}</Typography>
                </CardContent>
            </Box>
            <CardActions>
                <Button size="small" onClick={onEdit}>Edit</Button>
                <Button size="small" color="error" onClick={onDelete}>Delete</Button>
            </CardActions>
        </Card>
    );
};

export default People;