import { Container, Grid, TextField, Typography, Button, Alert, CircularProgress } from '@mui/material';
import { Box } from '@mui/system';
import React, { useState } from 'react';
import { NavLink, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import Loginbg from '../../../images/loginbg.jpg';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, isLoading, authError } = useAuth();

    const location = useLocation();
    const history = useHistory();
    // console.log(history);

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        console.log(field, value);
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        console.log(newLoginData);
        setLoginData(newLoginData);
    };

    const handleLoginSubmit = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }


    return (
        <Box style={{ position: "relative" }}>
            <img src={Loginbg} alt='' style={{ height: "100vh", width: "100%" }} />
            <Container style={{ position: "absolute", top: "20px" }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>

                    </Grid>
                    <Grid item sx={{ mt: 8 }} xs={12} md={6}>
                        <Typography variant="body1" gutterBottom>
                            Login
                        </Typography>
                        {!isLoading && <form onSubmit={handleLoginSubmit}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-basic"
                                label="Yout Email"
                                type="email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="filled" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="filled-basic"
                                label="Yout Password"
                                name="password"
                                onBlur={handleOnBlur}
                                type="password"
                                variant="filled" />
                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                            <NavLink
                                style={{ textDecoration: 'none' }}
                                to="/register">
                                <Button variant="text">New User? Complete Your Registration Please!</Button>
                            </NavLink>
                        </form>}
                        {isLoading && <CircularProgress color="inherit" />}
                        {user?.email && <Alert severity="success">User Login Successfully</Alert>}
                        {authError && <Alert severity="error">{authError}</Alert>}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Login;