import React from 'react';

const Footer = () => {
    return (
        <div className='py-20 -mb-16 -mx-8 bg-black text-white mt-20 px-16'>

            <div className='flex flex-col lg:flex-row max-[600px]:text-center justify-between '>

                <div>
                    <h1 className='text-3xl font-bold tracking-wider '>Skychef</h1>
                    <p className='my-2'>Find your favorite food from our website. <br /> Eat Healthy, Live Healthy</p>
                    
                </div>

                <div className='max-[600px]:mb-10'>
                    <h1 className='text-xl mb-3  font-bold '>Policies</h1>
                    <p>About Us</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Poclicy</p>
                    <p>Contact Us</p>
                </div>

                <div className='max-[600px]:mb-10'>
                    <h1 className='text-xl mb-3 gap-3 font-bold '>Product</h1>
                    <p>Master Chefs</p>
                    <p>Restaurants</p>
                    <p>Customers</p>
                    <p>Recipes</p>
                </div>

                <div className='max-[600px]:mb-10'>
                    <h1 className='text-xl mb-3 font-bold '>Support</h1>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                   
                </div>

                <div>
                    <h1 className='text-xl mb-3 font-bold '>Contact</h1>
                    <p>Mohammadpur, Dhaka-1207, Bangladesh <br /> +8801748521745</p>

                </div>

            </div>



            <hr className='mt-5' />



            <div className=' mt-10'>
                <p> &copy;2023 Skychef. All Rights Reserved</p>
                
            </div>

            
        </div>
    );
};

export default Footer;