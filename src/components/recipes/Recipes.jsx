import React from 'react';
import { Container } from 'react-bootstrap';
import SingleRecipe from '../singleRecipe/SingleRecipe';

const Recipes = ({ recipe }) => {
    const recipes = recipe.numbersOfrecipes;
    console.log(recipes)

    return (
        <Container className='mb-5'>

            {
                recipes.map((recipe, idx) => <SingleRecipe
                    key={idx}
                    recipe={recipe}
                >

                </SingleRecipe>)
            }
        </Container>
    );
};

export default Recipes;