import React from 'react';
import { Card, CardGroup, Col, Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import ChefsCard from '../chefsCard/ChefsCard';
import './Chefs.css';

const Chefs = () => {

    const chefs = useLoaderData()
    console.log(chefs, 'hello')

    return (
        <Container>
            <h3 className='text-center mb-lg-5 names-j'>Our Master Chefs: {chefs.length}</h3>

            <Row>
                <Col className='myCol'>
                    {
                        chefs.map((chef) => <ChefsCard
                            key={chef._id}
                            chef={chef}
                        >{chef}</ChefsCard>)
                    }
                </Col>
            </Row>

        </Container>
    );
};

export default Chefs;