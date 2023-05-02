import React from 'react';

const Register = () => {
    return (
        <div>
            <form >
                <input type="email" name="email" id="email" placeholder='please enter email' required />
                <br />
                <input type="password" name="password" id="password" placeholder='please enter password' required />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default Register;