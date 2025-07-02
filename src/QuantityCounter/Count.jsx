import {React, useState} from 'react'
import './Count.css'


function Count() {
    const [count, setCount] = useState(0);
    const handleDecrement = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }
    const handleIncrement = () => {
        if (count < 10){
            setCount(count + 1);
        }
    } 
  return (
    <div className='Count-cart'>
        <button className='Decrement' onClick={handleDecrement} type="button">-</button>
        <span className='Count'>{count}</span>
        <button className='Increment' onClick={handleIncrement} type="button">+</button>
    </div>
    
  )
}

export default Count