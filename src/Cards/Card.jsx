import React from 'react'
import "./Card.css"


function Card(props) {
  return (
    <div className='card'>
        <h1 className='card_name'>{props.cardName}</h1>
        <p className='card_description'>{props.description}</p>
        <button>{props.buttonName}</button>
    </div>
  )
}

export default Card