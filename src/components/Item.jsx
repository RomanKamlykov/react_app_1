import React from 'react'
import './Item.scss'

export default function Item(props) {
  return (
    <div className="item">
      <div className="img">
        <img src={props.item.img} alt="" />
      </div>

      <div className="text">
        <div className="name">
          {props.item.name}
        </div>
        <div className="price">
          <span className="price_current">{props.item.price}</span>
          <span className="discount">
            <span className="price_old">{props.item.priceOld}</span>
            <span className="interest">{props.item.interest}</span>
          </span>
        </div>
        <div className="note">
          {props.item.info}
        </div>
      </div>
    </div>
  )
}