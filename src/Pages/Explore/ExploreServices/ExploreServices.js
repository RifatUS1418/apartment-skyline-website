import React, { useEffect, useState } from 'react';
import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import ExploreService from '../ExploreService/ExploreService';
import Navigation from '../../Shared/Navigation/Navigation';

const ExploreServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://floating-brook-97400.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Box>
                <Container>
                    <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                        Choose Your Dream Apartment
                    </Typography>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            services.map(service => <ExploreService
                                key={service.code}
                                service={service}
                            ></ExploreService>)
                        }
                    </Grid>
                </Container>
            </Box>
        </>
    );
};

export default ExploreServices;