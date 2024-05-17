//import Navbar from'./components/NavBar'
import './App.css'

import { BrowserRouter , Routes, Route } from 'react-router-dom'

import Navbar from'./components/navbar/Navbar';
import Cart from './pages/Cart'
import Login from'./pages/login'
import Store from './pages/Store'
import Product from './pages/Product'
import StoreCategory from './pages/StoreCatergory';
import Footer from './components/footer/footer'




function App() {
  

  return (
    <>
  <BrowserRouter>
    <Navbar/>

    <Routes>
    
        <Route path="/bags" element= {<StoreCategory  catergory="bags"/>}/>
        <Route path="/womens" element={<StoreCategory categrory="womens"/>}/>
        <Route path="/jewelry" element={<StoreCategory categrory="jewelry"/>}/>

         <Route path="./pages/Cart.jsx" element={<Cart/>}/>
            <Route path="./pages/login.jsx" element={<Login/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
   
    </>
  )
}

export default App
