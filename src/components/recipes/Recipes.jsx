import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaRegBookmark } from "react-icons/fa";
import { toast } from 'react-toastify';

const Recipes = ({ recipe }) => {

    const recipesss = recipe.numbersOfrecipes;
    const notify = () => toast("Item Saved!")

    return (
        <Container className='mb-5'>
            <Row>
                <Col>
                    <Card className='p-2' style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={recipesss.recipe_1.recipe_image} />
                        <Card.Body>
                            <Card.Title>{recipesss.recipe_1.recipe_name}</Card.Title>
                            <Card.Text>
                                <span className='fw-bold'>Cooking Method:</span> {recipesss.recipe_1.recipe_description} <br />
                                <span>
                                    <span className='fw-semibold'>Ingredients: </span>{recipesss.recipe_1.ingredients}
                                </span>

                                <span className='d-lg-flex justify-content-between align-items-center'>
                                    Rating:
                                    <Rating style={{ maxWidth: '85px' }} value={recipesss.recipe_1.star_rating} readOnly />
                                    
                                    <span>{recipesss.recipe_1.star_rating}</span>
                                    <Button onClick={notify}> <FaRegBookmark /> </Button>
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Recipes;