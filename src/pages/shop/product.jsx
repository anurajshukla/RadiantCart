import React, { useContext } from 'react'
import {ShopContext} from '../../context/shop-context'
import './product.css'

export const Product = (props) => {
  const { id, productName, price, productImage } = props.data;
    const {addToCart, cartItems} = useContext(ShopContext)
    const cartItemAmount = cartItems[id]
  return (
    <div className="card">
        <img src={productImage} className='card-img' />
        <div className="card-info">
            <p className='text-title'> <b>{productName} </b></p>
            <p className='text-body'> Rs. {price}</p>
        </div>
        <button className="card-button" onClick={() => addToCart(id)}> 
        Add To Cart {cartItemAmount > 0 && <>({cartItemAmount}) </>}
        </button>
    </div>
  )
}
