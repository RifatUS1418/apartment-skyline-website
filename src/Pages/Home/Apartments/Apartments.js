import { Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import Apartment from '../Apartment/Apartment';

const Apartments = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://floating-brook-97400.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <Box>
            <Container>
                <Typography sx={{ fontWeight: 600, m: 5 }} variant="h4" component="div">
                    Best Apartments For You
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => services.indexOf(service) < 6 && <Apartment
                            key={service.code}
                            service={service}
                        ></Apartment>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Apartments;