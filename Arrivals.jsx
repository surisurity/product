import React from 'react'
import './arrivals.css'
import data_product from'../../assets/data.js'
import Items from'../item/Items'

const Arrivals = () => {
  return (
    <div className='Arrival-container'>
       <h1>Arrivals</h1>
        <hr/>
        <div className='Arrival'>
            {data_product.map((Item,i) =>{
                return <Items key={i} id={Item.id} name={Item.name} price={Item.price} image={Item.image} />
            } )}
            
        </div> 
    </div>
  )
}

export default Arrivals