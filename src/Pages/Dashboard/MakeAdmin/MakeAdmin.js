import { Button, Container, TextField, Alert } from '@mui/material';
import { Box } from '@mui/system';

import React, { useState } from 'react';
import useAuth from './../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value)
        setEmail(e.target.value);
        console.log(email);
    }
    const handleAdminSubmit = e => {
        const user = { email }
        // console.log(email);
        fetch('https://floating-brook-97400.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('')
                    setSuccess(true);
                }
            })

        e.preventDefault();
    }
    return (
        <div>
            <h2>Make Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <Container>
                    <TextField
                        sx={{ width: '50%' }}
                        label="Email"
                        name='email'
                        type="email"
                        onBlur={handleOnBlur}
                        variant="filled" />
                    <Box>
                        <Button type="submit" variant="contained" sx={{ width: '50%', mt: 2 }}>Make Admin</Button>
                    </Box>
                </Container>
            </form>
            {success && <Alert severity="success">Made Admin Successfully</Alert>}
        </div>
    );
};

export default MakeAdmin;