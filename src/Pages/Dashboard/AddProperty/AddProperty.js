import { Button, Container, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';

const AddProperty = () => {
    const [propertyInfo, setPropertyInfo] = useState({});
    console.log(propertyInfo);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newProperty = { ...propertyInfo };
        console.log(newProperty);
        newProperty[field] = value;
        setPropertyInfo(newProperty);
    }

    const handleAddProperty = e => {
        fetch('https://floating-brook-97400.herokuapp.com/apartments', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(propertyInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Added successfully');
                }
            })

        e.preventDefault();
    }


    return (
        <Box>
            <Container>
                <h1>Add New Apartment</h1>
                <form onSubmit={handleAddProperty}>
                    <TextField
                        sx={{ width: '75%' }}
                        id="filled-basic"
                        label="Code"
                        name="code"
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <TextField
                        sx={{ width: '75%', mt: 2 }}
                        id="filled-basic"
                        label="Name"
                        name="name"
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <TextField
                        sx={{ width: '75%', mt: 2 }}
                        id="filled-basic"
                        label="Price"
                        name="price"
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <TextField
                        sx={{ width: '75%', mt: 2 }}
                        id="filled-basic"
                        label="Text"
                        name="text"
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <TextField
                        sx={{ width: '75%', mt: 2 }}
                        id="filled-basic"
                        label="Description"
                        name="description"
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <TextField
                        sx={{ width: '75%', mt: 2 }}
                        id="filled-basic"
                        label="Image url"
                        name="img"
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <Button sx={{ width: '75%', mt: 2 }} type="submit" variant="contained">ADD NEW ONE</Button>
                </form>
            </Container>
        </Box>
    );
};

export default AddProperty;