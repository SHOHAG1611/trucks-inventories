import React from 'react';
import { Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

const AllProduct = ({ product }) => {
    const { price,name,img,quantity,body,sName } = product
    return (
        <div>
            <Card className='single-truck shadow p-3 mb-5 bg-body rounded'>
                <img className='product-img d-flex mx-auto' src={img} alt="" />
                <Card.Body>
                    <Card.Title>Name: {name}</Card.Title>
                    <Card.Title>Price: {price}</Card.Title>
                    <Card.Title>Quantity: {quantity}</Card.Title>
                    <Card.Text>{body}</Card.Text>
                    <Card.Text>{sName}</Card.Text>
                </Card.Body>
                {/* <Link to='/details'><button style={{ width: '100%' }} className='btn btn-primary details-btn'>Update</button></Link> */}
            </Card >
        </div>
    );
};

export default AllProduct;