import { Grid } from '@mui/material';
import React from 'react';
import banner from '../../../images/banner.jpg'
import { Typography } from '@mui/material/Typography';

const Banner = () => {
    return (
        <Grid container spacing={2}>
            <Grid style={{ position: 'relative' }} item xs={12} md={12}>
                <img src={banner} alt="" style={{ width: "100%", filter: "brightness(30%)" }} />
                <div style={{ postion: 'absolute', top: "20%", left: "20%" }}>
                    <Typography style={{ color: 'white' }} variant="h1" component="div" gutterBottom>
                        Apartment Skyline
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
};

export default Banner;