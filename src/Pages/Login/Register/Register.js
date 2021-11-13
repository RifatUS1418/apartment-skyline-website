import React, { useState } from 'react';
import { Container, Grid, TextField, Typography, Button, CircularProgress, Alert, AlertTitle } from '@mui/material';
import { Box } from '@mui/system';
import { NavLink, useHistory } from 'react-router-dom';
import regBg from '../../../images/loginbg.jpg'
import useAuth from './../../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const { user, registerUser, isLoading, authError } = useAuth();
    const history = useHistory();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match')
            return;
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault();
    };



    return (
        <Box style={{ position: "relative" }}>
            <img src={regBg} alt='' style={{ height: "100vh", width: "100%" }} />
            <Container style={{ position: "absolute", top: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>

                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Register
                        </Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-basic"
                                label="Yout Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="filled" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-basic"
                                label="Yout Email"
                                name="email"
                                type="email"
                                onBlur={handleOnBlur}
                                variant="filled" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-basic"
                                label="Your Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="filled" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-basic"
                                label="Re-type Your Password"
                                name="password2"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="filled" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/login">
                                <Button variant="text">Already Registered? Please Login</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress color="inherit" />}
                        {
                            user?.email && <Alert severity="success">
                                <AlertTitle>Success</AlertTitle>
                                Your Account Created Successfully — <strong>check it out!</strong>
                            </Alert>
                        }
                        {
                            authError && <Alert severity="error">
                                <AlertTitle>Error</AlertTitle>
                                {authError}
                            </Alert>
                        }
                    </Grid>
                </Grid>
            </Container >
        </Box>
    );
};

export default Register;