import React from 'react';

const CarouselIndicator = (props) => (
    <li data-target="#carouselExampleIndicators" data-slide-to={props.index} className={props.index === 0 ? 'active' : ''} >
        <svg height="20" width="20">
            <circle cx="10" cy="10" r="6" />
        </svg>
    </li>
)

export default CarouselIndicator;