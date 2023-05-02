import React from 'react';

const Login = () => {
    return (
        <div className='bg-white text-black w-6/12 mx-auto rounded-lg h-[400px]'>
            <h1 className='text-4xl font-bold pb-28 pt-10'>Login</h1>
            <form  >
               
                <label className='text-2xl mr-3 font-bold'>Email:</label>
               <input className='border-2  p-3 rounded border-zinc-400 w-[400px] h-10' type="email" name="email" id="email" placeholder='please enter your email' required />
             
                <br />
                <br />
                <label className='text-2xl mr-3  font-bold '>Password:</label>
                <input className='border-2  p-3 rounded border-zinc-400 w-[400px] mr-12 h-10' type="password" name="password" id="password" placeholder='please enter password' required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Login;