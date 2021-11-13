import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { NavLink } from 'react-router-dom';

const ExploreService = ({ service }) => {
    return (
        <Grid item xs={4} sm={4} md={4}>
            <Card sx={{ maxWidth: 345, maxHeight: 500, boxShadow: 3 }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={service.img}
                        alt="green iguana"
                    />
                    <CardContent sx={{ maxWidth: 345, height: 150 }}>
                        <Typography gutterBottom variant="h6" component="div" >
                            {service.name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div" >
                            {service.price}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {service.description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <NavLink to={`/purchase/${service._id}`} style={{ textDecoration: 'none' }}>
                        <Button size="small" color="primary" variant="contained">
                            BUY NOW
                        </Button>
                    </NavLink>
                </CardActions>
            </Card>
        </Grid >
    );
};

export default ExploreService;