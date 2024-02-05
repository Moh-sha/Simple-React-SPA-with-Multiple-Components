import React, { useEffect,useState } from 'react';
import { getStoredCart } from '../../utilities/fakedb';
import fakeData from '../../fakeData';
import Product from '../Product/Product';
import ReviewItem from '../ReviewItem/ReviewItem';
const Review = () => {

 const [cart ,setCart] = useState([]);
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
        <div>
            <h1>Total Cart : {cart.length}</h1>
            { 
             cart.map(p =>
                <ReviewItem Product={p}></ReviewItem>
              )
            }
        </div>
    );
};

export default Review;