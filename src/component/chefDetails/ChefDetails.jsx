import React, { useState, CSSProperties, useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import './ChefDetails.css';
import RecipesDetails from '../recipeDetails/RecipesDetails';
import { ClipLoader } from 'react-spinners';
const ChefDetails = () => {

  
    const chef = useLoaderData();

    let [color, setColor] = useState("#ffffff");


    const { id, img, description,
        name, experience, numbers_of_recipes, likes, recipes } = chef;
    return (
        <div>

            {/* spinner */}
            { !chef &&
                <ClipLoader
                    color={color}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />

            }

            <div className="card  lg:card-side  chefDetails-container p-16 bg-base-100 shadow-xl">
                <figure><img src={img} className=' h-[500px]' alt="Album" /></figure>
                <div className="card-body text-orange-300 opacity-70 lg:w-8/12 mt-20">
                    <h1 className="lg:text-5xl  font-bold">Name: {name}</h1>
                    <h4 className="lg:text-xl"> Years of experience: {experience}</h4>
                    <h4 className="lg:text-xl">Numbers of Recipes: {numbers_of_recipes}</h4>
                    <h4 className="lg:text-xl">Likes: {likes}</h4>
                    <p className='text-orange-100'>{description
                    }</p>
                </div>
            </div>


            <div className='flex gap-16 mt-20 flex-col lg:flex-row max-[600px]:ml-4'>
                {
                    recipes.map((recipe, index) => <RecipesDetails recipe={recipe} key={index + 1}></RecipesDetails>)
                }
            </div>

        </div>
    );
};

export default ChefDetails;