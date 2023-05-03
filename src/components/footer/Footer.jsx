import moment from 'moment/moment';
import React from 'react';
import { FaBeer, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='text-center mt-auto w-100' style={{backgroundColor: '#eee'}}>
            <p className='fw-normal py-3'><FaRegCopyright/> All rights reserved <span>{moment().format('YYYY')}</span></p>
        </div>
    );
};

export default Footer;