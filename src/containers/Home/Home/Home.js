import React from 'react';
import AboutDillar from '../AboutDillar/AboutDillar';
import AboutStock from '../AboutStock/AboutStock';
import Banner from '../Banner/Banner';
// import HomeItem from '../HomeItem/HomeItem';
import HomeItems from '../HomeItems/HomeItems';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutDillar></AboutDillar>
            <HomeItems></HomeItems>
            <AboutStock></AboutStock>
        </div>
    );
};

export default Home;