import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import PurchasedApartment from '../PurchasedApartment/PurchasedApartment';

const DashBoardHome = () => {
    return (
        <Box>
            <Container>
                <PurchasedApartment></PurchasedApartment>
            </Container>
        </Box>
    );
};

export default DashBoardHome;