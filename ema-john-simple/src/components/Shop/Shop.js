import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
const Shop = () => {
   
    const ten_products = fakeData.slice(0,10);
    const[product, setProduct ] = useState(ten_products);  
      
    return (
         <div className='shop-container'>
            <div className="product-container">

         
          
       {
           product.map(e=> <Product product={e}></Product>)

       }  
          
            
            </div>

        <div className="cart-container">
            
        <h3>Cart container</h3>


        </div>               
             
        </div>

    );
};

export default Shop;