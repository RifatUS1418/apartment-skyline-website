import React, { useState } from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import useAuth from './../../../hooks/useAuth';
import { Button } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



const PurchaseModal = ({ openPurchase, handlePurchaseClose, property, setPurchaseSucess }) => {
    const { user } = useAuth();

    const { name, code } = property;

    const initialInfo = { customerName: user.displayName, email: user.email, address: '', phone: '' }

    const [purchaseInfo, setPurchaseInfo] = useState(initialInfo);


    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...purchaseInfo, status: 'Panding' };
        newInfo[field] = value;
        // console.log(newInfo);
        setPurchaseInfo(newInfo);
    }
    console.log(purchaseInfo);

    const handlePurchase = e => {
        // collect data
        const purchaseApartment = {
            ...purchaseInfo,
            propertyName: name,
            propertyCode: code
        }
        //send data to the server
        fetch('https://floating-brook-97400.herokuapp.com/customers_data', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(purchaseApartment)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setPurchaseSucess(true);
                    handlePurchaseClose();
                }
            })



        e.preventDefault();
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openPurchase}
            onClose={handlePurchaseClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={openPurchase}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        Please Give Your Information
                    </Typography>
                    <form onSubmit={handlePurchase}>
                        <TextField
                            disabled
                            label="Apartment Code"
                            sx={{ width: "100%", m: 1 }}
                            id="filled-size-small"
                            defaultValue={code}
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            label="Name"
                            sx={{ width: "100%", m: 1 }}
                            id="filled-size-small"
                            name="customerName"
                            onBlur={handleOnBlur}
                            defaultValue={user.displayName}
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            label="Email"
                            sx={{ width: "100%", m: 1 }}
                            id="filled-size-small"
                            name="email"
                            onBlur={handleOnBlur}
                            defaultValue={user.email}
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            label="Address"
                            sx={{ width: "100%", m: 1 }}
                            id="filled-size-small"
                            name="address"
                            onBlur={handleOnBlur}
                            defaultValue="Address"
                            variant="filled"
                            size="small"
                        />
                        <TextField
                            label="Phone"
                            sx={{ width: "100%", m: 1 }}
                            id="filled-size-small"
                            name="phone"
                            onBlur={handleOnBlur}
                            defaultValue="Phone"
                            variant="filled"
                            size="small"
                        />
                        <Button type="submit" variant="outlined" sx={{ width: "100%", m: 1 }}>Purchase</Button>
                    </form>
                </Box>
            </Fade>
        </Modal>
    );
};

export default PurchaseModal;