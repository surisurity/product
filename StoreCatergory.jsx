import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import all_data from '../assets/all_data'
import './storecateory.css'
import Item from '../components/item/Items'

const StoreCategory = (props) => {

  const {all_data} = useContext(ShopContext);

  return (
    <div className='store-catgeory'>
       <img src={props.banner} alt=''/> 
        <div className='store-category-indexSort'>
          <p>
            <span>showing 1-12</span> out of 40 products
          </p>
          <div className='sortby-storecatergory'>
            sort by <img src='' alt=' ' />
          </div>

        </div>
        <div className='storecatergory-products'>
          {all_data.map((item,i) =>{
            if(props.category ===item.category){
              return <Items key={i} id={Item.id} name={Item.name} price={Item.price} image={Item.image} />
            } else{
              return null
            }
          })}
        </div>
    </div>
  )
}

export default StoreCategory