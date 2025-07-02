import React from 'react'
import "./Box.css"
import Cart from '../Cart/Cart'
import image1 from '../images/vans.jpg'
import image2 from '../images/nike.jpg'
import image3 from '../images/airmax.jpg'

function Box() {
  return (
    <div className='Box'>
      <Cart 
      productName={"Vans"}
      productDescription={"Super Van new brand"}
      imageLink={image1}
      price={500.00}
      />
      <Cart
      productName={"Nike"}
      productDescription={"Super Nike new brand"}
      imageLink={image2}
      price={390.00}
      />
      <Cart
      productName={"Air MAx"}
      productDescription={"Super Air Max new brand"}
      imageLink={image3}
      price={740.00}
      />
    </div>
  )
}

export default Box