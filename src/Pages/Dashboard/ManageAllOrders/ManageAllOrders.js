import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

const ManageAllOrders = () => {
    const [apartments, setApartments] = useState([]);

    useEffect(() => {
        fetch('https://floating-brook-97400.herokuapp.com/customers_data/orders')
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
                console.log(data);
                if (data.url) {
                    window.confirm('Are you sure to delete thi service, Sir')
                    const remaining = apartments.filter(property => property._id !== id);
                    setApartments(remaining);
                }
            })
    }

    return (
        <div>
            <h1>Total Customers Orders:{apartments.length}</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Apartment purchased table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Customer Name</TableCell>
                            <TableCell>Customer Email</TableCell>
                            <TableCell>Property Name</TableCell>
                            <TableCell align="right">Property Code</TableCell>
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
                                    {row.customerName}
                                </TableCell>
                                <TableCell >{row.email}</TableCell>
                                <TableCell >{row.propertyName}</TableCell>
                                <TableCell align="right">{row.propertyCode}</TableCell>
                                <TableCell align="right"><Button onClick={() => handleDelete(row._id)} variant="contained">Cancel</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </div>
    );
};

export default ManageAllOrders;