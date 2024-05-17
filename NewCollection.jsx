import './New-collection.css'
import collection from '../../assets/NewCollections.js'
import Items from '../item/Items'

const NewCollections = () => {
  return (
    <div className='new-collections'>
      <h3> new collection</h3>
    <hr/>
      <div className='collection-item'>
      {collection.map((Item,i)=>{
      return  <Items key={i} id={Item.id} name={Item.name} price={Item.price} image={Item.image} /> 
      })}
      </div>
    </div>
  )
}

export default NewCollections