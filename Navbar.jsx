import React from'react'
import { useState } from 'react';
import './Navbar.css';

import { Link } from 'react-router-dom'
import logo from '../../assets/logoshop.png';
import cart from '../../assets/cart.png';

const Navbar = () => {

  const [menu ,setMenu] =useState("shop")



  return (
    <div className='Navbar-container'>
       <div className='logo'>
        <img src={logo}alt='' className='logo-icon'/>
       </div>
          <ul className='nav-links'>
            <li onClick={()=>{setMenu("bags")}}><Link to="/bags" >bags{menu==="bags"}</Link> </li>
           <li onClick={()=>{setMenu("womens")}} ><Link to="/womens" >womens{menu==="womens"}</Link> </li>
           <li onClick={() =>{setMenu("jewelry")}} ><Link to="/jewelry" >jewelry{menu==="jewelry"}</Link> </li>
           <li onClick={() =>{setMenu("/")}} ><Link to="/" >home{menu==="/"}</Link> </li>
          </ul>
          <div className='login-cart'>
            <Link to='/login'><button>Login</button> </Link>
            <Link to='/cart'> <img src={cart}alt='' className='cart-icon'/> </Link>
            
           
            <div className='nav-cart-count'>0</div>

          </div>
    </div>
  )
}

export default Navbar