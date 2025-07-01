import React from 'react'
import "./Cart.css"

function Cart(props) {
  return (
    <div className='Cart'>
        <h1 className='name'>{props.productName}</h1>
        <p>{props.productDescription}</p>
        <img className='image' src={props.imageLink} alt="" />
        <h2 className='price'>{props.price}</h2>
        <button>+ Add to card</button>
    </div>
  )
}

export default Cart