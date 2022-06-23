import React from 'react'
import Items from './items';
import { useContext } from 'react';
import { CartContext } from './cart';

function ContextCard() {
 
    const item = useContext(CartContext);
    
    return (
    <>
        <header>
            <div className='continue-shopping'>
                <img src='https://img.icons8.com/external-royyan-wijaya-detailed-outline-royyan-wijaya/344/external-arrow-arrow-line-royyan-wijaya-detailed-outline-royyan-wijaya-9.png' alt = "arrow" className = "arrow-icon"></img>
                <h3>Do shopping</h3>
            </div>

            <div className="cart-icon">
                <img src="https://img.icons8.com/ios-glyphs/344/shopping-cart-promotion.png" alt='cart' className=''></img>
                <p>7</p>
            </div>
        </header>

        <section className="main-cart-section">
            <h1>Shopping Cart</h1>
            <p className="total-items">You have <span className="total-items-count">4</span> items in the cart</p>
        

            <div className='cart-items'>
                <div className='cart-items-container'>
                    {
                        item.map((curItem) => {
                            return (
                                <Items key={ curItem.id} { ...curItem}/>
                            );
                        })
                    }
                </div>
            </div>

            <div className='card-total'>
                <h3>Cart Total : <span>Rs.2200</span></h3>
                <button>Checkout</button>
            </div>
        </section>

    </>
  )
}

export default ContextCard;