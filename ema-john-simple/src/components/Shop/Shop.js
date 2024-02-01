import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
   
    const ten_products = fakeData.slice(0,10);
    const[product, setProduct ] = useState(ten_products); 
    const [cart,setCart] = useState([]);
     
    const handleProduct=(product)=>{

        console.log("add items",product);
        const New_cart = [...cart , product];
        setCart(New_cart);
    }
      
    return (
         <div className='shop-container'>
            <div className="product-container">

         
          
       {
           product.map(e=> <Product handleproduct={handleProduct} product={e}></Product>)

       }  
          
            
            </div>

        <div className="cart-container">
            
   


        </div>               
           
             <Cart cart={cart}></Cart>
        </div>

    );
};

export default Shop;