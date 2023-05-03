import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {

    const { loginUser, google, github } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    // login with google
    const handleGoogle = () => {
        google()
            .then(res => {
                console.log(res.user);
                navigate(from, { replace: true });
                setError('');

            })
            .catch(er => {
                setError(er.message)
            })
    }

    // login with github
    const handleGithub = () => {
        github()
            .then(res => {
                console.log(res.user);
                navigate(from, { replace: true });
                setError('');
            })
            .catch(er => {
                setError(er.message)
            })
    }



    // log in with email and password
    const handleLogin = (event) => {

        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        // validate password
        if (!/(?=.{6,})/.test(password)) {
            setError('The password is less than 6 characters')
            return;
        }
        loginUser(email, password)
            .then(res => {
                setError('')
                console.log(res.user)
                setSuccess('login successful');
                navigate(from, { replace: true });
            })
            .catch(er => {
                setError(er.message);
                setSuccess('');
            })


    }

    return (

        <div className=' text-black bg-white lg:w-6/12 mx-auto rounded-lg h-[600px]'>
            <h1 className='text-4xl font-bold pb-20 pt-10'>Login</h1>
            <form onSubmit={handleLogin} >

                <label className='text-2xl mr-3 font-bold'>Email:</label>
                <input className='border-2  p-3 rounded border-zinc-400 lg:w-[400px] h-10' type="email" name="email" placeholder='please enter your email' required />

                <br />
                <br />

                <label className='text-2xl mr-3  font-bold '>Password:</label>
                <input className='border-2  p-3 rounded border-zinc-400 lg:w-[400px] mr-12 h-10' type="password" name="password" id="password" placeholder='please enter password' required />

                <br />

                <p className='text-red-500 text-left mt-2 ml-40'>{error}</p>
                <p className='text-green-500 text-left mt-2 ml-40'>{success}</p>
                <button className='btn text-xl mt-5 lg:mr-48 px-10 bg-blue-500'><input type="submit" value="Login" /></button>

            </form>

            <p className='  text-center  mt-5 '>Dont have an account?  <span className='text-blue-600'> <Link to='/register'>Register</Link></span></p>

            {/* google and github signin button */}
            <div className='flex flex-col gap-4 ml-8 mt-8 items-center'>
                <button onClick={handleGithub} className="btn w-[350px] font-bold btn-outline"><FaGithub className='w-8 text-2xl'></FaGithub>  Login with Github </button>
                <button onClick={handleGoogle} className="btn w-[350px] font-bold  btn-outline btn-primary"><FaGoogle className='w-8 text-2xl'></FaGoogle> Login with google</button>
            </div>

        </div>
    );
};

export default Login;