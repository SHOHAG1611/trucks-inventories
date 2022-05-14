import React, { useEffect, useState } from 'react';
import HomeItem from '../HomeItem/HomeItem';
import './HomeItems.css'
const HomeItems = () => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('https://fathomless-crag-24672.herokuapp.com/truck')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const homeService = products.slice(0, 6)
    return (
        <div>
            <div className='trucks-container'>
                {
                    homeService.map(product => <HomeItem key={product._id} product={product}></HomeItem>)
                }
            </div>
        </div>
    );
};

export default HomeItems;