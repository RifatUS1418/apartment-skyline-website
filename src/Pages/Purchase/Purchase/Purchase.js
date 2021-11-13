import { Container, Typography, Button, Alert } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import PurchaseModal from '../PurchaseModal/PurchaseModal';


const Purchase = () => {
    const { propertyId } = useParams();
    const [property, setProperty] = useState({});
    const [openPurchase, setPurchaseOpen] = React.useState(false);
    const handlePurchaseOpen = () => setPurchaseOpen(true);
    const handlePurchaseClose = () => setPurchaseOpen(false);

    const [purchaseSuccess, setPurchaseSucess] = useState(false);

    useEffect(() => {
        fetch(`https://floating-brook-97400.herokuapp.com/apartments/${propertyId}`)
            .then(res => res.json())
            .then(data => setProperty(data))
    }, []);




    return (
        <Box style={{ position: "relative" }}>
            <img src={property.img} alt='' style={{ width: "100%", height: "100vh", filter: "brightness(30%)" }} />
            <Container style={{ position: "absolute", top: '30%', color: 'white' }}>
                <Typography variant="h2" gutterBottom component="div">
                    {property.name}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    Property Code: {property.code}
                </Typography>
                <Typography variant="subtitle1" gutterBottom component="div">
                    {property.text}
                </Typography>
                <Typography variant="body1" gutterBottom>
                    {property.description}
                </Typography>
                <Button onClick={handlePurchaseOpen} variant="contained" sx={{ width: "50%", my: 3 }}>Confirm Your Purchase</Button>
                {purchaseSuccess && <Alert severity="success">Purchase Successfully</Alert>}
            </Container>
            <PurchaseModal
                property={property}
                openPurchase={openPurchase}
                setPurchaseSucess={setPurchaseSucess}
                handlePurchaseClose={handlePurchaseClose}
            ></PurchaseModal>
        </Box>



    );
};

export default Purchase;