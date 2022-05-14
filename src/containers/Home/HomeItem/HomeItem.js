import React from 'react';
import { Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './HomeItem.css'

const HomeItem = ({ product }) => {
    const { name, body, img, price, quantity, sName, _id } = product;

    const navigate = useNavigate()
    const singleDetels = id => {
        navigate(`/truck/${id}`)
    }
    return (
        <div className='container text-center'>
            <Card className='single-truck shadow p-3 mb-5 bg-body rounded'>
                <img className='product-img d-flex mx-auto' src={img} alt="" />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Title>Quantity: {quantity}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Card.Text>{sName}</Card.Text>
                </Card.Body>
                <button onClick={()=>singleDetels(_id)} style={{ width: '100%' }} className='btn btn-primary details-btn'>Update</button>
            </Card >
        </div>
    );
};
export default HomeItem;
