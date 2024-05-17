import React from 'react'
import './Item.css'

const Items = (props) => {
  return (
    <div className='Item-container'>
        <img src={props.image} alt=''/>
          <p>{props.name}</p>
        <div className='Item-price'>
            <p>zar{props.price}</p>
        </div>
        <button>a</button>
    </div>
  )
}

export default Items
