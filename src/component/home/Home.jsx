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

                <h1 className='text-5xl chef-title font-bold opacity-60'>Top 6 Master Chef of Bangladesh</h1>

                <div className='grid mt-16 lg:grid-cols-3 gap-14 justify-center items-center'>


                    {
                        chef.map(c => <Chef key={c.id} c={c}></Chef>)
                    }
                </div>
            </div>


            <div className='popular-section mt-20 flex flex-col-reverse lg:flex-row justify-between items-center p-10 gap-5'>
                <div className='w-full'>
                    <h1 className='lg:text-5xl text-2xl font-bold'>Food, in the end, in our own tradition, is something holy. It's not about nutrients and calories. It's about sharing. It's about honesty. It's about identity.</h1>

                    
                </div>

                <div className='w-full'>
                    <img src="https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                </div>
            </div>        


                            <div>
                            <h1 className='text-5xl mt-20 chef-title font-bold opacity-60'>Featured Food</h1>
                        

                    <div className='featured-item mt-6 flex flex-col-reverse lg:flex-row justify-between items-center p-10 gap-5'>

                    
                    <div className='w-full'>
                        <h1 className='text-2xl featured-title mb-4'>Traditional</h1>
                    <img src="https://plus.unsplash.com/premium_photo-1661777678748-f22506af1965?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" />
                    </div>

                    <div className='w-full'>
                    <h1 className='text-2xl featured-title mb-4'>Festival</h1>
                    <img src="https://images.unsplash.com/photo-1608835291093-394b0c943a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80" alt="" />
                    </div>
                    <div className='w-full'>
                    <h1 className='text-2xl featured-title mb-4'>Occasional</h1>
                    <img src="https://images.unsplash.com/photo-1518133683791-0b9de5a055f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
                    </div>

                    </div>


                    </div>
        </>
    );
};

export default Home;