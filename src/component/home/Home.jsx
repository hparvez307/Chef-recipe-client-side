import React from 'react';
import './Home.css';
import Hero from '../hero/Hero';

const Home = () => {
    return (
        <>
           <div className='hero rounded-xl'>
               <h1 className='hero-title '>Welcome to Skychef</h1>

               <h4 className='mt-44 max-[600px]:hidden'>
               You know that certain foods can help you lose weight and lower your  risk for disease — but do you know why?<br /> Discover your path to better health and nutrition — read why certain nutrients,  vitamins,  & naturally <br /> found in food can improve your health and help you live a long, active life.
               </h4>
           </div>
        </>
    );
};

export default Home;