import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className='bg-white text-black lg:w-6/12 mx-auto rounded-lg h-[600px]'>
        <h1 className='text-4xl font-bold pb-20 pt-10'>Register</h1>
        <form  >


        <label className='text-2xl mr-3 font-bold'>Name:</label>
           <input className='border-2 mr-2 p-3 rounded border-zinc-400 lg:w-[400px] h-10' type="text" name="name" id="name" placeholder='please enter your name' required />
         
            <br />
            <br />
           
            <label className='text-2xl mr-3 font-bold'>Email:</label>
           <input className='border-2  p-3 rounded border-zinc-400 lg:w-[400px] h-10' type="email" name="email" id="email" placeholder='please enter your email' required />
         
            <br />
            <br />

            <label className='text-2xl mr-3  font-bold '>Password:</label>
            <input className='border-2  p-3 rounded border-zinc-400 lg:w-[400px] mr-12 h-10' type="password" name="password" id="password" placeholder='please enter password' required />

            <br />
            <br />
            <label className='text-2xl pr-3  font-bold'>Photo Url:</label>
           <input className='border-2 mr-[150px]  rounded border-zinc-400  p-1' type="file" name="email" id="email" placeholder='please enter your email' required />
         
            

            <br />
            <p className='text-red-500 text-left mt-2 ml-40'>Error</p>
            <button className='btn text-xl mt-5 lg:mr-48 px-10 bg-blue-500'><input type="submit" value="Login" /></button>
        </form>

        <p className=' text-center  mt-5 '>Dont have an account?  <span className='text-blue-600'> <Link to='/register'>Register</Link></span></p>



            

    </div>
    );
};

export default Register;