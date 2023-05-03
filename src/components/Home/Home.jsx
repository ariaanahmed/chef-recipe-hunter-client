import React from 'react';
import Banner from '../banner/Banner';
import Chefs from '../chefs/Chefs';
import FamousFoods from '../famousFoods/FamousFoods';
import HotRecipes from '../hotrecipes/HotRecipes';

const Home = () => {
    return (
        <div >
            <Banner/>
            <Chefs/>
            <FamousFoods/>
            <HotRecipes/>
        </div>
    );
};

export default Home;