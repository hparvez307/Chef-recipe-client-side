import React from 'react';
import './Chef.css';

const Chef = ({c}) => {
    console.log(c)

    const {img, name,experience,numbers_of_recipes,likes} = c;
    return (
        <div className="card w-80 bg-base-100 shadow-xl">
  <figure><img className=' h-80 w-full bg-green-950 ' src={img} alt="chef" /></figure>
  <div className="card-body chef-card-body ">
    <h2 className="card-title">Name: {name}</h2>
    <h3>Years of experience: {experience}</h3>
    <h3>Numbers of Recipes: {numbers_of_recipes}</h3>
    <h4>Likes: {likes}</h4>
    <div className="card-actions justify-center">
      <button className="btn ">View Recipes</button>
    </div>
  </div>
</div>
    );
};

export default Chef;