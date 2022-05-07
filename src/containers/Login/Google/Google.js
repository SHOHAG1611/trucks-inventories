import React from 'react';
import googleLogo from '../../img/google/google.png'

const Google = () => {
    return (
        <div>
            <button className='btn btn-primary mt-2 mx-auto rounded-pill'>
                <img style={{width:'33px'}} src={googleLogo} alt="" />
                Continue with google </button>
        </div>
    );
};

export default Google;
