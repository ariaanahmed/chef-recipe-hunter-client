import React from 'react';
import { Card, Container } from 'react-bootstrap';

import img1 from '../../assets/imgs/Pizza.jpg';
import img2 from '../../assets/imgs/Coffee.jpg';
import img3 from '../../assets/imgs/Shake.jpg';


const HotRecipes = () => {
    return (
        <Container className='bg-light'>
            <h3 className='text-center pb-5'>Hottest Recipes</h3>
            <div className='d-lg-flex text-center gap-5 pb-5'>
                <Card>
                    <Card.Img variant="top" className='pb-5 p-2' src={img1} />
                    <Card.Body>
                        <Card.Title>Pasto Pizza With Extra Toppings</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" className='pb-5 p-2' src={img2} />
                    <Card.Body>
                        <Card.Title>Healthy Strawberry and Banana Shakes</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" className='pb-5 p-2' src={img3} />
                    <Card.Body>
                        <Card.Title>Healthy Strawberry and Banana Shakes</Card.Title>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the cards content.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        </Container>
    );
};

export default HotRecipes;