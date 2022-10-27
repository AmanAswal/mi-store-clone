import Carousel from 'react-bootstrap/Carousel';
import React from 'react';
import data from "../data/data.json";

const banner = data.banner;

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