import React from 'react'
import {PRODUCTS} from '../../products'
import { Product } from './product'
import './shop.css'

export const Shop = () => {
  return (
    <div className="shop">
        <div>
            <h1> Anuraj's Shop </h1>
        </div>
        <div className="products">
            {PRODUCTS.map((product) => 
            <Product data={product}/> )}
        </div>
    </div>
  )
}
