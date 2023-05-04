import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import BannerImg from '../../assets/imgs/banner.jpg'

const Banner = () => {
    return (
        <Container className='bg-light'>
            <Row className='d-flex align-items-center pb-3 pt-lg-5 pb-lg-5'>
                <Col lg={6}>
                    <h1 className='text-capitalize fw-semibold py-3' style={{fontSize: '4rem'}}>Discover the art of cooking</h1>
                    <p className='fw-normal text-secondary'>Cooking is an art that involves creativity, passion, and precision. A skilled chef can turn basic ingredients into a culinary masterpiece, delighting the senses with flavor, texture, and presentation.</p>
                </Col>
                <Col lg={6}>
                    <div className='border-left'>
                        <img className='img-fluid rounded' src={BannerImg} alt="banner-img" />
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Banner;