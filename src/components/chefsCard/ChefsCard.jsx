import { keys } from 'localforage';
import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ChefsCard = ({ chef }) => {
    const { chefsImg, name, likes, experience, totalRecipes, _id } = chef
    return (
        <div className='d-lg-flex gap-1 border p-2 rounded'>
            <div className='flex-grow-1'>
                <Card.Img variant="top" src={chefsImg} className='rounded py-lg-0 py-2 mx-lg-none mx-auto d-block' style={{ width: '180px', height: '180px', }} />
            </div>
            <div className='text-center'>
                <h6 className='text-right'>{name}</h6>
                <p><small>Experi: {experience}</small></p>
                <h6 className='text-secondary'>Likes: {likes}</h6>
                <p>Recipes: {totalRecipes}</p>
                <Link to={`/ChefRecipes/:${_id}`}>
                    <Button>View</Button>
                </Link>
            </div>
        </div>
    );
};

export default ChefsCard;