import React, { useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Google from '../Google/Google';
import './Login.css'
// 
import auth from '../../../firebase.init';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const emailUseRef = useRef('');
    const passUseRef = useRef('');
    const navigate = useNavigate()
    const location = useLocation();

    let from = location.state?.from?.pathname || "/";
    const  [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    //error massage 
    let errorMassage;
    if (error) {
        errorMassage = <p>{error?.message}</p>
    }
    if (user) {
        navigate(from, { replace: true });
    }
    // sign in with google
    const submitHandle = event => {
        event.preventDefault();
        const email = emailUseRef.current.value;
        const password = passUseRef.current.value;
        signInWithEmailAndPassword(email, password)
    }
    const goingToRegister = event => {
        navigate('/register')
    }

    // reset password
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);
    const updatePass = async () => {
        const email = emailUseRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            alert('reset password')
        }
    }
    return (
        <div>
            <form onSubmit={submitHandle} style={{
                backgroundImage: `url("https://css-tricks.com/wp-content/uploads/2018/08/vector.png")`
            }} className='login-form text-center mt-5 mx-auto bg-info'>
                <input type="email" ref={emailUseRef} name="email" placeholder='Enter Your Email' required />
                <br />
                <input type="password" name="password" ref={passUseRef} placeholder='Password' required />
                <br />
                {errorMassage}
                <p className='text-white mt-3 mb-0'>Create a account! <span><Link to='/register' onClick={goingToRegister}>please register</Link></span></p>
                <br />
                <p className='text-white'>Forget Password <span><Link to='/register' onClick={updatePass}>Please Reset</Link></span></p>
                <br />
                <input className='btn btn-primary' type="submit" value="Login" />
                <Google></Google>
            </form>
        </div>
    );
};

export default Login;
