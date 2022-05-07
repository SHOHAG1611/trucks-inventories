import React from 'react';
import { Link } from 'react-router-dom';

const Details = () => {
    return (
        <div>
                <h3>this is details </h3>

                <Link to='/manageInventories'><button className='btn btn-primary text-center'>Manage Inventories</button></Link>
        </div>
    );
};

export default Details;