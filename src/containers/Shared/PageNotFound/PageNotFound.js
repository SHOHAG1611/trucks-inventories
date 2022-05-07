import React from 'react';
import notFound from '../../img/404/404.jpg'
import './PageNotFound.css'

const PageNotFound = () => {
    return (
        <div className='page-error mx-auto'>
            <img  src={notFound} alt="" />
        </div>
    );
};

export default PageNotFound;