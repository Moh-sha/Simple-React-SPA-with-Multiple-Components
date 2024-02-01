import React from 'react';


const Cart = (props) => {
    const cart_file =props.cart;
    console.log(cart_file);
   console.log(cart_file.lenght);
   const total = cart_file.reduce ((total,pd)=>total+pd.price  ,0);
   let  shipping = 0;
   if(total >35){
     shipping = 0;
   }
   else if(total > 15 ){

     shipping = 4.99 

   }
   else if(total > 0 ){

     shipping = 12.99 ;

   }

    return (
        <div>
          <br />
          <h4>Order Summary </h4>
          <p>Item Ordered: {cart_file && cart_file.length}</p> 
          <p>
            <small>Shipping Cost : {shipping}</small>
          </p>
          <p>Product price : {total}</p>
          <p>Total price : {total + shipping}</p>
         
        </div>
    );
};

export default Cart;