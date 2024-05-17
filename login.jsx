import React from 'react'

const login = () => {
  return (
    <div className='loginsignup'>
      <div className='login-container'>
        <h1>sign up</h1>
        <div className='login-fields'>
          <input type='text' placeholder='Fullname' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
        </div>
        <button type="button">signup</button>
        <p className='loginsignup-login'> ALready have account click <span>here</span></p>
        <div className='login-agree'>
          <input type="checkbox" name="" id=""/>
          <p className=''> you are to our terms and conditons policy</p>
        </div>
      </div>
    
    </div>
  )
}

export default login