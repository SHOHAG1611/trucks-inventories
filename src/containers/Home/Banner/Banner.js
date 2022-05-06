import React from 'react';
import { Carousel } from 'react-bootstrap';
import bannerFour from '../../img/banner/banner-3.jpg'
import bannerFive from '../../img/banner/banner-5.jpg'
import bannerFiv from '../../img/banner/banner-1.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div className='banner-container'>
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={bannerFive}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={bannerFiv}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={bannerFour}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default Banner;