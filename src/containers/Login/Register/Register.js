import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Google from '../Google/Google';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });


    const navigate = useNavigate();
    const goingToLogin = event => {
        navigate('/register')
    }

    const submitHandle = event => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/addItem')
    }
    if (user) {
        navigate('/myItems')
    }
    if (user) {
        navigate('/manageInventories')
    }

    //error massage 
    let errorMassage;
    if (error) {
        errorMassage = <p>{error?.message}</p>
    }
    return (
        <div>
            <form onSubmit={submitHandle} style={{
                backgroundImage: `url("https://css-tricks.com/wp-content/uploads/2018/08/vector.png")`
            }} className='login-form text-center mt-5 mx-auto bg-info'>
                <input type="text" name="name" placeholder='enter your name' />
                <br />
                <input type="email" name="email" placeholder='Enter Your Email' required />
                <br />
                <input type="password" name="password" placeholder='Password' required />
                <br />
                <p className='text-white mt-3 mb-0'>Already have an Account? <span><Link to='/Login' onClick={goingToLogin}>please Login</Link></span></p>
                <br />
                <p>{errorMassage}</p>
                <input className='btn btn-primary' type="submit" value="Register" />
                <Google></Google>
            </form>
        </div>
    );
};

export default Register;
