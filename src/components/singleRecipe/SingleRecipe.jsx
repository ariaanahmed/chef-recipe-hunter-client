import { Rating } from '@smastrom/react-rating';
import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import '@smastrom/react-rating/style.css'
import { FaRegBookmark } from "react-icons/fa";
import { toast } from 'react-toastify';

const singleRecipe = ({recipe}) => {

    const notify = () => toast("Item Saved!")
    const {recipe_name, recipe_image, recipe_description, ingredients, star_rating} = recipe;
    return (
        <Container>
            <Row>
                <Col>
                    <Card className='p-2 mb-3' style={{ width: '100%' }}>
                        <Card.Img variant="top" style={{ width: '100%', height: '200px' }} src={recipe_image} />
                        <Card.Body>
                            <Card.Title> {recipe_name} </Card.Title>
                            <Card.Text>
                                <span className='fw-bold'>Cooking Method:</span> {recipe_description} <br />
                                <span>
                                    <span className='fw-semibold'>Ingredients: {ingredients}</span>
                                </span>

                                <span className='d-lg-flex justify-content-between align-items-center'>
                                    Rating:
                                    <Rating style={{ maxWidth: '85px' }} value={star_rating} readOnly />
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

export default singleRecipe;