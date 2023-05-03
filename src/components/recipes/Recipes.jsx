import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { IconName } from "react-icons/fa";

const Recipes = ({ recipe }) => {

    const recipesss = recipe.numbersOfrecipes;

    const { name } = recipe;

    console.log(recipesss.recipe_1)
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='p-2' style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={recipesss.recipe_1.recipe_image} />
                        <Card.Body>
                            <Card.Title>{recipesss.recipe_1.recipe_name}</Card.Title>
                            <Card.Text>
                                <span className='fw-bold'>Cooking Method:</span> {recipesss.recipe_1.recipe_description} <br />
                                <p><span className='fw-semibold'>Ingredients: </span>{recipesss.recipe_1.ingredients}</p>

                                <span className='d-flex gap-2'>Rating: 
                                    <Rating style={{ maxWidth: '85px' }} value={recipesss.recipe_1.star_rating} readOnly /> 
                                    {recipesss.recipe_1.star_rating}
                                    </span>
                                    <Button>S</Button>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Recipes;