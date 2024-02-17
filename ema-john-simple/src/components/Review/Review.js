import React, { useEffect,useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
import {clearTheCart} from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import { Link } from 'react-router-dom';
const Review = () => {

 const [cart ,setCart] = useState([]);

 const HandleRemoveItem=(product_key)=>{
        
   console.log("Clicked",product_key);

  const new_cart = cart.filter(pd=> pd.key !== product_key);

  setCart(new_cart);

  clearTheCart(product_key);

 }



  useEffect(()=>{
    const saveData = getStoredCart(); 
    const ShowKey = Object.keys(saveData);
    const counts = ShowKey.map(key=>
    {
    const product_key =fakeData.find(pd=> pd.key === key);
    product_key.quantity = saveData[key];
    return product_key;
    });setCart(counts);

    },[]);
    
     
   

 //cart



    return (
        <div class="shop-container">
          <div class="product-container">
          { 
             cart.map(p =>
                <ReviewItem Product={p} HandleRemoveItem={HandleRemoveItem}></ReviewItem>
              )
            }  
            
          </div> 
          
        <div class="cart-container">
        <Cart cart={cart}>
        <Link to='/review'>
            <button className='main-button'>Place Order</button>
          </Link>
         
       </Cart>
        </div> 
             
        </div>
    );
};

export default Review;