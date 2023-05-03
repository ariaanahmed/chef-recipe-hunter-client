import React from 'react';
import { Card, Container } from 'react-bootstrap';
import Marquee from "react-fast-marquee";
import img1 from '../../assets/imgs/ig-1.png'
import img2 from '../../assets/imgs/ig-2.png'
import img3 from '../../assets/imgs/ig-3.png'
import img4 from '../../assets/imgs/ig-4.png'
import img5 from '../../assets/imgs/ig-5.png'

const FamousFoods = () => {
    return (
        <Container className='pb-5 bg-light'>
            <h3 className='text-center py-5'>Famous Foods</h3>
            <Marquee pauseOnHover={true}>
                <Card className='p-2' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img1} />
                </Card>
                <Card className='p-2' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img2} />
                </Card>
                <Card className='p-2' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img3} />
                </Card>
                <Card className='p-2' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img4} />
                </Card>
                <Card className='p-2' style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={img5} />
                </Card>
            </Marquee>
        </Container>
    );
};

export default FamousFoods;