import React from 'react'
import "./Cart.css"
import { ImCart } from "react-icons/im";
import Count from '../QuantityCounter/Count';

function Cart(props) {
  return (
    <div className='Cart'>
        <h1 className='name'>{props.productName}</h1>
        <p>{props.productDescription}</p>
        <img className='image' src={props.imageLink} alt="" />
        <h2 className='price'>¥{props.price}</h2>
        <Count/>
        <button><ImCart /> Add to card</button>
    </div>
  )
}

export default Cart