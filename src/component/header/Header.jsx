import React, { useContext } from 'react';
import './Header.css';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';


const Header = () => {

    const { logOut, user } = useContext(AuthContext);

    console.log(user);
   
    const handleLogout = () => {
        logOut()
            .then()
            .catch(er => console.log(er.message))
    }

    return (

        <div className='header flex flex-col gap-5  max-[600px]:mb-32 md:flex-row  items-center justify-between lg:mb-10 py-3'>

            <h1 className='text-6xl nav-title font-extrabold tracking-wider'>Sky<span className='text-5xl tracking-wider' >chef</span></h1>

            <div className=' flex gap-3 items-center'>
                <NavLink to="/" className={({ isActive }) => isActive ? "active" : ""} ><span className='px-3 font-bold text-2xl'>Home</span></NavLink>

                <NavLink to="/blog" className={({ isActive }) => isActive ? "active" : ""} ><span className='px-3 font-bold text-2xl'>Blog</span></NavLink>


                {
                    user ? <img title={user?.displayName} className='user-img'
                        src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" /> : ''
                }


                {
                    user ? <button onClick={handleLogout} className='font-bold text-2xl'>Logout</button>
                        :
                        <Link to='/login' className='font-bold text-2xl'>Login</Link>
                }
            </div>



        </div>
    );
};

export default Header;