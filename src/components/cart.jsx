import React from 'react'
import { createContext } from 'react';
import './cart.css';
import { products } from './products';
import ContextCard from './contextCard';


export const CartContext = createContext();

function Cart() {
  
    //const [item, setItem] = useState(products);
    return (
    <>
        <CartContext.Provider value={products}>
            <ContextCard />
        </CartContext.Provider>
            
    </>
  );
}

export default Cart;