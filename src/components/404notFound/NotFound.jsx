import React from 'react';
import Lottie from "lottie-react";

import NotFoundPageAni from '../../assets/98170-sunthalpy-404.json';

const NotFound = () => {
    return (
        <div>
            <Lottie className='w-25 mx-auto' animationData={NotFoundPageAni} loop={true} />
        </div>
    );
};

export default NotFound;