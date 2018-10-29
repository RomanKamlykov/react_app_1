import React from 'react';
import CarouselIndicator from './Slider/CarouselIndicator';
import CarouselItem from './Slider/CarouselItem';
import './Slider.scss';

const Slider = (props) => (
    <div id="slider">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
            <ol className="carousel-indicators">
                {props.carousel.map((item, index) => {
                    return (
                        <CarouselIndicator index={index} key={index} />
                    )                                     
                })}            
            </ol>

            <div className="carousel-inner">
                {props.carousel.map((item, index) => {
                    return (
                        <CarouselItem item={item} index={index} key={index} />
                    )                                  
                })}            
            </div>
        </div>
    </div>
)

export default Slider;