import React, { useContext } from 'react'

import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadscrum from '../components/breadscrum/breadscrum'

const Product = () => {

  const {all_product} =useContext(ShopContext);
  const {productId} =useParams();

  const product = all_product.find((e) =>  e.id===  Number(productId))


  return (
    <div className='Product'>
       <Breadscrum product ={product}/>

    </div>
  )
}

export default Product