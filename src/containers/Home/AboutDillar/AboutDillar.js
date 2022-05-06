import React from 'react';
import Dillar from '../../img/AboutDillar/maneger.jpg'

const AboutDillar = () => {
    return (
        <div className='container mt-5 mb-5'>
            <div>
                <h1 className='text-center'>Company Provider</h1>
            </div>
            <div className='about-stock'>
                <div className=''>
                    <img src={Dillar} alt="" />
                </div>
                <div className=''>
                    <p>About us we are secret person but you can know our service sorry stocks items list and name</p>
                </div>
            </div>
        </div>
    );
};

export default AboutDillar;