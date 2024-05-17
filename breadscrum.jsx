import React from 'react'
import arrow from'../../assets/right-arrow_545682.png'
import './breadscrum.css'


const Breadscrum = (props) => {

    const {product} = props;
  return (
    <div className='breadscrum'>
        home <img src={product.image}alt='' /> shop <img src='' alt=""/> {product.category} <img src='' alt="" /> NAME <img src='' alt=""/>
    </div>
  )
}

export default Breadscrum