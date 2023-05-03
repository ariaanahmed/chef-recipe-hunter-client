import moment from 'moment/moment';
import React from 'react';
import { Container } from 'react-bootstrap';
import { FaBeer, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
    return (
        <Container fluid className='text-center mt-auto w-100' style={{backgroundColor: '#eee'}}>
            <p className='fw-normal py-3'><FaRegCopyright/> All rights reserved <span>{moment().format('YYYY')}</span></p>
        </Container>
    );
};

export default Footer;