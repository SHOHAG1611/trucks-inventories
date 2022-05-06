import React from 'react';
import stocksItems from '../../img/AboutStock/aboutStocks.jpg'
import './AboutStock.css'

const AboutStock = () => {
    return (
        <div className='container'>
            <div>
                <h1 className='text-center'>Our Stocks</h1>
            </div>
            <div className='about-stock'>
                <div className=''>
                    <p>About us we are secret person but you can know our service sorry stocks items list and name</p>
                </div>
                <div className=''>
                    <img src={stocksItems} alt="" />
                </div>

            </div>
        </div>
    );
};

export default AboutStock;