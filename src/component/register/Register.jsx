import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../authProvider/AuthProvider';


const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // validate the password
        if (!/(?=.{6,})/.test(password)) {
            setError('The password is less than 6 characters')
            return;
        }

        // signup with email and password
        createUser(email, password)
            .then(res => {
                console.log(res.user);
                setError('');
                setSuccess('Registration successful');
            })
            .catch(error => {
                setError(error.message);
                setSuccess('');
            })

        form.reset();
    }

    return (
        <div className='bg-white text-black lg:w-6/12 mx-auto rounded-lg h-[600px]'>
            <h1 className='text-4xl font-bold pb-20 pt-10'>Register</h1>
            <form onSubmit={handleRegister} >


                <label className='text-2xl mr-3 font-bold'>Name:</label>
                <input className='border mr-2 p-3 rounded border-zinc-400 lg:w-[400px] h-10' type="text" name="name" id="name" placeholder='please enter your name' required />

                <br />
                <br />

                <label className='text-2xl mr-3 font-bold'>Email:</label>
                <input className='border  p-3 rounded border-zinc-400 lg:w-[400px] h-10' type="email" name="email" id="email" placeholder='please enter your email' required />

                <br />
                <br />

                <label className='text-2xl mr-3  font-bold '>Password:</label>
                <input className='border  p-3 rounded border-zinc-400 lg:w-[400px] mr-12 h-10' type="password" name="password" id="password" placeholder='please enter password' required />

                <br />
                <br />

                <label className='text-2xl pr-3  font-bold'>Photo Url:</label>
                <input className='border mr-[150px]  rounded border-zinc-400  p-1' type="file" name="photo" id="photo" placeholder='please enter your email' required />



                <br />

                <p className='text-red-500 text-left mt-2 ml-40'>{error}</p>
                <p className='text-green-500 text-left mt-2 ml-40'>{success}</p>
                <button className='btn text-xl mt-5 lg:mr-48 px-10 bg-blue-500'><input type="submit" value="Register" /></button>

            </form>

            <p className=' text-center  mt-5 '>Have an account?  <span className='text-blue-600'> <Link to='/login'>Login</Link></span></p>

        </div>
    );
};

export default Register;