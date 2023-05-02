import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ChefDetails.css';
const ChefDetails = () => {
    const chef = useLoaderData();
    console.log(chef);
    const { id, img, description,
        name, experience, numbers_of_recipes, likes } = chef;
    return (
        <div>

            <div className="card  lg:card-side  chefDetails-container p-16 bg-base-100 shadow-xl">
                <figure><img src={img} className=' h-[500px]' alt="Album" /></figure>
                <div className="card-body text-orange-300 lg:w-8/12 mt-20">
                    <h1 className="lg:text-5xl  font-bold">Name: {name}</h1>
                    <h4 className="lg:text-xl"> Years of experience: {experience}</h4>
                    <h4 className="lg:text-xl">Numbers of Recipes: {numbers_of_recipes}</h4>
                    <h4 className="lg:text-xl">Likes: {likes}</h4>
                    <p className='text-orange-100'>{description
                    }</p>
                </div>
            </div>

        </div>
    );
};

export default ChefDetails;