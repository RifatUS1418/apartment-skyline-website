import { Button, Container } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import { Box } from '@mui/system';
import React, { useState, useEffect } from 'react';
import useAuth from '../../../hooks/useAuth';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import CustomerReview from '../CustomerReview/CustomerReview';

const Reviews = () => {
    const { user } = useAuth();
    console.log(user);
    const [review, setReview] = useState({});
    const [reviews, setReviews] = useState([]);

    const handleOnChange = e => {
        const value = e.target.value;
        // const customerReviews = [...reviews];
        // customerReviews.push(customerReview);
        const customerReview = { displayName: user.displayName, review: value };
        console.log(customerReview);
        setReview(customerReview);
    }
    // console.log(review);

    useEffect(() => {
        fetch('https://floating-brook-97400.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, []);

    console.log(reviews);

    const handleReview = e => {

        fetch('https://floating-brook-97400.herokuapp.com/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        e.preventDefault();
    }



    return (
        <Container>
            <Box>
                <form onSubmit={handleReview}>
                    <Box sx={{ display: "flex", justifyContent: 'start', ml: 5 }}>
                        <TextareaAutosize
                            sx={{ m: 3 }}
                            maxRows={4}
                            aria-label="maximum height"
                            onChange={handleOnChange}
                            placeholder="Maximum 4 rows"
                            defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore et dolore magna aliqua."
                            style={{ width: "50%", border: 'none', borderBottom: "2px solid grey" }}
                        />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: 'start', ml: 3 }}>
                        <Button sx={{ width: '50%', m: 2 }} variant="contained" type="submit" endIcon={<SendIcon />}>
                            Send
                        </Button>
                    </Box>
                </form>
                <Box >
                    {
                        reviews.map(propertyReview => <CustomerReview
                            key={propertyReview._id}
                            propertyReview={propertyReview}
                        ></CustomerReview>)
                    }
                </Box>
            </Box>
        </Container>
    );
};

export default Reviews;