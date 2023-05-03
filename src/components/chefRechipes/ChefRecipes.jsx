import React, { useEffect } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../recipes/Recipes';
import './ChefRecipes.css'
import { Container } from 'react-bootstrap';

const ChefRecipes = () => {
    const signleRecipes = useLoaderData();
    console.log(signleRecipes)
    return (
        <Container>
            <h3>chef recipes</h3>
            <div className='singleCardsCotnainer'>
                {
                    signleRecipes.map((recipe) => <Recipes
                        key={recipe._id}
                        recipe={recipe}
                    ></Recipes>)
                }
            </div>
        </Container>
    );
};

export default ChefRecipes;