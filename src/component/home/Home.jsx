import React, { useContext } from 'react';
import './Home.css';
import Chef from '../chef/Chef';
import { AuthContext } from '../../authProvider/AuthProvider';


const Home = () => {

    const { chef } = useContext(AuthContext);

    console.log(chef);

    return (
        <>

            {/* hero section */}
            <div className='hero rounded-xl mb-28'>
                <h1 className='hero-title '>Welcome to Skychef</h1>

                <h4 className='mt-44 max-[600px]:hidden'>
                    You know that certain foods can help you lose weight and lower your  risk for disease — but do you know why?<br /> Discover your path to better health and nutrition — read why certain nutrients,  vitamins,  & naturally <br /> found in food can improve your health and help you live a long, active life.
                </h4>
            </div>

            {/* main section */}

            <div className='chef-container'>

                <h1 className='text-5xl font-bold opacity-50'>Top 6 Master Chef of Bangladesh</h1>

                <div className='grid mt-16 lg:grid-cols-3 gap-14 justify-center items-center'>


                    {
                        chef.map(c => <Chef key={c.id} c={c}></Chef>)
                    }
                </div>
            </div>
        </>
    );
};

export default Home;