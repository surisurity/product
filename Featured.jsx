import React from'react'
import './Feature.css'
import featureimage from'../../assets/feature.jpg'



const Featured = () => {
  return (
    <div className='Featured-container'>
        <h2>Featuring exlusive brands</h2>
        <div className='featured-left'>
          <img src={featureimage} className='' alt=''/>
        </div>
        <div className='featured-right'>
      <h3>features brand just for you</h3>
      <h4>best clothing brands</h4>
      <button>view now</button>
        </div>
    </div>
  )
}

export default Featured