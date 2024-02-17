import React from 'react';
import Product from '../Product/Product';

const ReviewItem = (props) => {
    console.log(props);
    
    return (
        <div className='review-item'>
             <h1 className='product-name'>{props.Product.name}</h1>
                 <p>Quantity : {props.Product.quantity}</p>
                 <p><small>Product Price : {props.Product.price}</small></p>
                 <br />
                 <button className='main-button' onClick={()=>props.HandleRemoveItem(props.Product.key)} >Remove</button>
        </div>
    );
};

export default ReviewItem;