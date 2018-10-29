import React from 'react';

const CarouselItem = (props) => (
    <div className={props.index === 0 ? 'carousel-item active' : 'carousel-item'}>
        <img className="d-block w-100" src={props.item.img} alt={props.index+1 + "slide"} />

        <div>
            <p>WELCOME <br/>TO BERLOGA WORKSHOP</p>
            <button type="button" className="btn btn-success">DISCOVER</button>    
        </div>
    </div>
)

export default CarouselItem;