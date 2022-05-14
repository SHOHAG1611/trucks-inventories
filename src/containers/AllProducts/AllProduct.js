import React from 'react';
import { Card } from 'react-bootstrap';
import './AllProduct.css'

const AllProduct = ({ product }) => {
    const { price, name, img, quantity, body, sName, _id } = product;

    const deleteTruck = id => {
        const sure = window.confirm('are you sure to stock our this item')
        if (sure) {
            const url = `https://fathomless-crag-24672.herokuapp.com/truck/${id}`
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                })
        }
    }
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
                <button className='item-delete btn btn-primary' onClick={() => deleteTruck(_id)} >Delete</button>
            </Card >
        </div>
    );
};

export default AllProduct;