import { Container, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

const Footer = () => {
    return (
        <Box style={{ backgroundColor: "grey", color: 'white', p: 8 }}>
            <Container>
                <Typography variant="subtitle2" gutterBottom component="div">
                    © Copyright 2021. All Rights Reserved, Apartment Cardinal, California, LA , US
                </Typography>
            </Container>
        </Box>

    );
};

export default Footer;