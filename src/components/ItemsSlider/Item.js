import React from 'react';

const Item = (props) => (
    <div className="item">
        <div className="img">
            <img src={props.item.img} alt="" className="" />
        </div>

        <div className="text">
            <div className="name">{props.item.name}</div>
            <div>
                <span className="price">{props.item.price}</span>

                <span className="stock">
                    <span className="price_old">{props.item.priceOld}</span>
                    <span> </span>
                    <span className="interest">{props.item.interest}</span>
                </span>                                
            </div>
            <div className="info">{props.item.info}</div>
        </div>
    </div>
)

export default Item;