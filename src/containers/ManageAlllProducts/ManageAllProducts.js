import React, { useEffect, useState } from 'react';
import AllProduct from '../AllProducts/AllProduct';
// import ManageInventories from '../ManageInventories/ManageInventories'

const ManageAllProducts = () => {
 
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    })
    return (
        <div>
            <div className='trucks-container'>
                {
                    products.map(product=><AllProduct key={product._id} product={product}></AllProduct>)
                }
            </div>
        </div>
    );
};

export default ManageAllProducts;