import React from 'react';
import { Card } from 'react-bootstrap';
import './AllProduct.css'

const AllProduct = ({ product }) => {
    const { price,name,img,quantity,body,sName } = product
    return (
        <div>
            <Card className='single-product shadow p-3 mb-5 bg-body rounded'>
                <img className='product-img d-flex mx-auto' src={img} alt="" />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Title>Quantity: {quantity}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Card.Text>{sName}</Card.Text>
                </Card.Body>
                <button className='item-delete btn btn-primary'>Delete</button>
            </Card >
        </div>
    );
};

export default AllProduct;