import Carousel from 'react-bootstrap/Carousel';
import React from 'react';

const Slider = ({ start }) => {
    return (
        <Carousel fade>

            {
                start.map((item, index) => (
                    <Carousel.Item interval={1500}>
                        <img
                            className="d-block w-100"
                            src={item}
                            alt="First slide"
                        />
                    </Carousel.Item>
                ))
            }
        </Carousel>
    )
}

export default Slider