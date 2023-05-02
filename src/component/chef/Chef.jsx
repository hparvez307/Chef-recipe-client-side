import React from 'react';
import './Chef.css';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';


const Chef = ({ c }) => {


  const { id, img, name, experience, numbers_of_recipes, likes } = c;

  return (

    <div className="card rounded-none w-96 bg-base-100 shadow-xl">

      <div> <LazyLoad>
        <img className=' h-80 w-full bg-green-950 ' src={img} alt="chef" /></LazyLoad> </div>

      <div className="card-body -mt-10  chef-card-body ">
        <h1 className="text-2xl">Name: {name}</h1>
        <h4>Years of experience: {experience}</h4>
        <h4>Numbers of Recipes: {numbers_of_recipes}</h4>
        <h4>Likes: {likes}</h4>

        <div className="card-actions justify-center">
          <Link to={`/chef/${id}`}><button className="btn glass btn-wide">View Recipes</button></Link>
        </div>

      </div>
    </div>
  );
};

export default Chef;