import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Apartments from '../Apartments/Apartments';
import Banner from '../Banner/Banner';
import HomeReviews from '../HomeReviews/HomeReviews';
import Navigation from './../../Shared/Navigation/Navigation';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Apartments></Apartments>
            <HomeReviews></HomeReviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;