import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipesDetails = ({ recipe }) => {

    const [fav, setFav] = useState(false);
    const { recipe_name, rating, cooking_method, ingredients } = recipe;
    const notify = () => toast(`Added the ${recipe_name} recipe in the favorite list!`);
    return (
        <div>

            <div className="card w-96 h-full bg-base-100 shadow-xl image-full">
                <figure><img src="https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="Shoes" /></figure>


                <div className="card-body ">
                    <h1 className="lg:text-4xl text-orange-300 font-bold">{recipe_name}</h1>
                    <h4 className="lg:text-xl text-orange-200 mb-6">Ratings: {rating}</h4>
                    <h5><span className='text-xl text-orange-200 '>Ingredients:</span>  <br />{ingredients.map(i => <ol> <i>{i}</i> </ol>)}</h5>

                    <p className='mb-10 mt-5'>
                        <span className='text-xl text-orange-200 '>Cooking Method:</span> <br />
                        {cooking_method}
                    </p>
                    <div onClick={() => setFav(true)} className="card-actions justify-center absolute bottom-0">
                        <button onClick={notify} disabled={fav} className="btn btn-wide bg-red-600 ml-8  mb-5">favorite</button>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default RecipesDetails;