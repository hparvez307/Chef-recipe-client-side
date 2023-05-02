import React from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header flex flex-col gap-5  max-[600px]:mb-32 md:flex-row  items-center justify-between lg:mb-10 py-3'>

            <h1 className='text-6xl nav-title font-extrabold tracking-wider'>Sky<span className='text-5xl tracking-wider' >chef</span></h1>

            <div className=' flex gap-3 items-center'>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} ><span className='px-3 font-bold text-2xl'>Home</span></NavLink>

                <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""} ><span className='px-3 font-bold text-2xl'>Blog</span></NavLink>

             
                <Link to='/login' className='font-bold text-2xl'>Login</Link>
                
            </div>

            

        </div>
    );
};

export default Header;