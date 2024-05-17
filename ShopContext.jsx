import { createContext } from "react"
import React from 'react'
import all_data from '../assets/all_data.js'


export const ShopContext = createContext(null);


const ShopContextProivder = (props) => {

const contextValue = {all_data};


return(
    <ShopContext.Provider value ={contextValue}>
        {props.children}
    </ShopContext.Provider>
)


}

export default ShopContextProvider
