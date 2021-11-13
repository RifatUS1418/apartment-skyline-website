import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const PurchasedApartment = () => {
    const { user } = useAuth();
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        const url = `https://floating-brook-97400.herokuapp.com/customers_data?email=${user.email}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setApartments(data));
    }, [])

    // handle purchase delete
    const handleDelete = id => {
        const url = `https://floating-brook-97400.herokuapp.com/customers_data/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(data => {
                // console.log(data);
                if (data.deletedCount) {
                    window.confirm('Are you sure to cancel your purchase, Sir/Medam')
                    const remaining = apartments.filter(property => property._id !== id);
                    setApartments(remaining);
                }
            })
    }

    return (
        <div>
            <h2>Apartments: {apartments.length}</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Apartment purchased table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Property Name</TableCell>
                            <TableCell align="right">Property Code</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Cancel Purchase</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {apartments.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.propertyName}
                                </TableCell>
                                <TableCell align="right">{row.propertyCode}</TableCell>
                                <TableCell align="right">{row?.status}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDelete(row._id)} variant="contained">Cancel</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default PurchasedApartment;