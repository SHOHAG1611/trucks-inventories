import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import googleLogo from '../../img/google/google.png'


const Google = () => {
    const [signInWithGoogle, user] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    if (user) {
        navigate('/addItem')
    }
    if (user) {
        navigate('/myItems')
    }
    if (user) {
        navigate('/manageInventories')
    }
    return (
        <div>
            <div className='text-white'>
                <div>____________________</div>
                <div>Or</div>
                <div>____________________</div>
            </div>
            <button onClick={() => signInWithGoogle()} className='btn btn-primary mt-2 mx-auto rounded-pill'>
                <img style={{ width: '33px' }} src={googleLogo} alt="" />
                Continue with google </button>
        </div>
    );
};

export default Google;
