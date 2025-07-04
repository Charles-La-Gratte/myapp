import React from 'react'
import { products } from '../products'
import ProductCart from '../Component/productCart'

const Home = () => {
  return (
    <div>
      <h1 className='text-3xl my-5'>List of the product</h1>
      <div className='grid jg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-5'>
        {products.map((product,key) =>
        <ProductCart key={key} data={product}/>
      )}
      </div>
    </div>
  )
}

export default Home