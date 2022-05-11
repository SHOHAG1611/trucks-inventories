import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AllProduct from '../AllProducts/AllProduct';
import './ManageAllProducts.css'
// import ManageInventories from '../ManageInventories/ManageInventories'

const ManageAllProducts = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/truck')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div>
            <div className='trucks-container'>
                {
                    products.map(product => <AllProduct key={product._id} product={product}></AllProduct>)
                }
            </div>
            <Link className='add-item-btn' to='/addItem'>Add Item</Link>
        </div>
    );
};

export default ManageAllProducts;