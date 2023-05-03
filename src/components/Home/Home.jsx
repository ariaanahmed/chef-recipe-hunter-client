import React from 'react';
import Banner from '../banner/Banner';
import Chefs from '../chefs/Chefs';
import FamousFoods from '../famousFoods/FamousFoods';

const Home = () => {
    return (
        <div>
            <Banner/>
            <Chefs/>
            <FamousFoods/>
        </div>
    );
};

export default Home;