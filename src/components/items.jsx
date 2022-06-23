import React from 'react';
import {AiOutlineMinus} from 'react-icons/ai';
import {AiOutlinePlus} from 'react-icons/ai';
import {FaTrash} from 'react-icons/fa';
import './cart.css';

function Items({description, title, img, price}) {
  return (
   <>
                <div className='items-info'>
                        <div className='product-img'>
                            <img src={img} alt="pro"></img>
                        </div>

                        <div className='title'>
                            <h2>{title}</h2>
                            <p>{description}</p>
                        </div>

                        <div className='add-minus-quantity'>
                            <AiOutlineMinus className='minus' />
                            <input type="text" placeholder="2" />
                            <AiOutlinePlus className='add'/>
                        </div>

                        <div className='price'>
                            <h3>{price}</h3>
                        </div>

                        <div className='remove-item'>
                            <FaTrash />
                        </div>
                </div>
            <hr></hr>
   </>
  )
}

export default Items;