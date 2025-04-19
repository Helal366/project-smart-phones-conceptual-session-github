import React from 'react';
import { useState } from "react";
import { CartContext } from './CartContext';


const CartContextProvider = ({children}) => {
    const [cart, setCart]=useState([])
    return (
        <CartContext.Provider value={{cart, setCart}}> 
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;