import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div>
            <form style={{
                backgroundImage: `url("https://css-tricks.com/wp-content/uploads/2018/08/vector.png")`
            }} className='login-form text-center mt-5 mx-auto bg-info'>
                <input type="text" name="name" placeholder='enter your name'/>
                <br />
                <input type="email" name="email" placeholder='Enter Your Email' required />
                <br />
                <input type="password" name="password" placeholder='Password' required />
                <br />
                <p className='text-white mt-3 mb-0'>Already have an Account? <span><Link to='/Login'>please Login</Link></span></p>
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

export default Register;