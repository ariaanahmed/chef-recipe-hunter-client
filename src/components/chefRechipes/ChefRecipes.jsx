import { useLoaderData, useParams } from 'react-router-dom';
import Recipes from '../recipes/Recipes';
import './ChefRecipes.css'
import { Container } from 'react-bootstrap';

const ChefRecipes = () => {

    const recipes = useLoaderData()

    return (
        <Container>
            <h3 className='text-center text-capitalize pb-3'>chef recipes</h3>
            
            <div className='singleCardsCotnainer'>
                {
                    recipes.map((recipe) => <Recipes
                        key={recipe._id}
                        recipe={recipe}
                    ></Recipes>)
                }
            </div>
        </Container>
    );
};

export default ChefRecipes;