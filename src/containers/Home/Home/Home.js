import React from 'react';
import AboutDillar from '../AboutDillar/AboutDillar';
import AboutStock from '../AboutStock/AboutStock';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AboutDillar></AboutDillar>
            <AboutStock></AboutStock>
        </div>
    );
};

export default Home;