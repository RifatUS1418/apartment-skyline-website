import { Container, Typography } from '@mui/material';
import React from 'react';

const CustomerReview = ({ propertyReview }) => {
    const { displayName, review } = propertyReview;
    return (
        <Container sx={{ m: 2, border: '2px solid gray', borderRadius: "5px", p: 2 }}>
            <Typography sx={{ display: "flex", justifyContent: 'start' }} variant="subtitle2" gutterBottom component="div">
                {displayName}
            </Typography>
            <Typography sx={{ display: "flex", justifyContent: 'start' }} variant="caption" display="block" gutterBottom>
                {review}
            </Typography>
        </Container>
    );
};

export default CustomerReview;