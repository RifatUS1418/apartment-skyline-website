import { Container, Grid } from '@mui/material';
import React from 'react';
import banner from '../../../images/banner.jpg'
import { Typography } from '@mui/material';
import { Box } from '@mui/system';

const Banner = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={12}>
                <Box style={{ position: 'relative' }}>
                    <img src={banner} alt="" style={{ width: "100%", filter: "brightness(30%)" }} />
                    <Typography style={{ color: 'white', position: 'absolute', top: "30%", left: "20%" }} variant="h1" component="div" gutterBottom>
                        Apartment Skyline
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default Banner;