import React from 'react';
import stocksItems from '../../img/AboutStock/aboutStocks.jpg'
import './AboutStock.css'

const AboutStock = () => {
    return (
        <div className='container mt-5 mb-5 text-white'>
            <div>
                <h1 className='text-center'>Our Stocks</h1>
            </div>
            <div className='about-stock'>
                <div className=''>
                    <p>The trucking industry was hit hard by the coronavirus pandemic in 2020. Since then, economic activity has improved, and freight market conditions have stabilized enough for volumes to return to normal gradually. And it’s not a moment too soon. The trucking industry has been an integral part of our economy for decades. It provides transportation for goods and services, generating jobs in manufacturing and logistics. However, the industry has been rocked by a crippling driver shortage. On the bright side, legislators understand how important the industry is to their constituents, which is why sentiment turns bullish on trucking stocks.</p>
                </div>
                <div className=''>
                    <img src={stocksItems} alt="" />
                </div>

            </div>
        </div>
    );
};

export default AboutStock;