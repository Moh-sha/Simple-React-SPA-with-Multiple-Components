import React, { useEffect, useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb } from '../../utilities/fakedb';
import { getStoredCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';
const Shop = () => {
   
    const ten_products = fakeData.slice(0,10);
    const[product, setProduct ] = useState(ten_products); 
    const [cart,setCart] = useState([]);
     
    const handleProduct=(product)=>{

        const addItems = product.key; 
        const sameproduct = cart.find(pd=> pd.key === addItems);
        let count =1 ;
        let newCart ;
        if(sameproduct){
               
             count = sameproduct.quantity + 1;
             sameproduct.quantity = count;
             const otherProduct = cart.filter(pd=> pd.key !== addItems);
             newCart = [...otherProduct, sameproduct];

             

        }
       else {
              
         product.quantity = 1; 
         newCart = [...cart, product];


       }
       
        setCart(newCart);
       
        addToDb(product.key,sameproduct);
    }
      
       useEffect(()=>{
          
        const saveData = getStoredCart();
        console.log(saveData);
        const productKey = Object.keys(saveData);
        console.log(productKey);
        const PreviousCart = productKey.map(pdkey=>
        {
         const product = fakeData.find(pd => pd.key === pdkey );
         product.quantity = saveData[pdkey];
         return product;


        })
     
      setCart(PreviousCart);

       },[])


    return (
         <div className='shop-container'>
            <div className="product-container">

         
          
       {
           product.map(e=> <Product showaddtocart={true} key={e.key} handleproduct={handleProduct} product={e}></Product>)

       }  
          
            
            </div>

        <div className="cart-container">
            
   
        <Cart cart={cart}></Cart>
        <Link to='/review'>
            <button className='main-button'>Review</button>
          </Link>
         


        </div>               
           
        </div>

    );
};

export default Shop;