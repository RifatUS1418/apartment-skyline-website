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


const ManageAllPropery = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://floating-brook-97400.herokuapp.com/apartments')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])


    // handle status update
    // const handleStatusUpdate = id => {
    //     const url = `https://floating-brook-97400.herokuapp.com/customers_data/${id}`
    //     fetch(url, {
    //         method: 'PUT',
    //         headers: {
    //             'contenst-type': 'application/json'
    //         },
    //         body: JSON.stringify({ status: 'Panding' })
    //     })
    // }



    // handle purchase delete
    const handleDelete = id => {
        const url = `https://floating-brook-97400.herokuapp.com/apartments/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    window.confirm('Are you sure to cancel your purchase, Sir/Medam')
                    const remaining = services.filter(property => property._id !== id);
                    setServices(remaining);
                }
            })
    }

    return (
        <div>
            <h1>Manage All Property</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="Apartment purchased table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Property Name</TableCell>
                            <TableCell align="right">Property Code</TableCell>
                            <TableCell align="right">Price</TableCell>
                            {/* <TableCell align="right">Update Status</TableCell> */}
                            <TableCell align="right">Cancel Purchase</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {services.map((row) => (
                            <TableRow
                                key={row._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {row.name}
                                </TableCell>
                                <TableCell align="right">{row.code}</TableCell>
                                <TableCell align="right">{row.price}</TableCell>
                                {/* <TableCell align="right"><Button onClick={() => handleStatusUpdate(row._id)} variant="contained">Update Status</Button></TableCell> */}
                                <TableCell align="right"><Button onClick={() => handleDelete(row._id)} variant="contained">Cancel</Button></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default ManageAllPropery;