import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div>
            <form style={{
                backgroundImage: `url("https://css-tricks.com/wp-content/uploads/2018/08/vector.png")`
            }} className='login-form text-center mt-5 mx-auto bg-info'>
                <input type="email" name="email" placeholder='Enter Your Email' required />
                <br />
                <input type="password" name="password" placeholder='Password' required />
                <br />
                <p className='text-white mt-3 mb-0'>Create a account! <span><Link to='/register'>please register</Link></span></p>
                <br />
                <p className='text-white'>Forget Password <span><Link to='/register'>Please Reset</Link></span></p>
                <br />
                <input className='btn btn-primary' type="submit" value="Login" />
                <div className='text-white'>
                    <div>____________________</div>
                    <div>Or</div>
                    <div>____________________</div>
                </div>
                <div>
                    <button className='btn btn-primary mt-3 google-login'>Continue with Google</button>
                </div>
            </form>
        </div>
    );
};

export default Login;