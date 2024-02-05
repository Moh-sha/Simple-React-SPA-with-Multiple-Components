import React from 'react';

const ReviewItem = (props) => {
    console.log(props);
    
    return (
        <div className='review-item'>
            <h1 className='product-name'>{props.Product.name}</h1>
                 <p>Quantity : {props.Product.quantity}</p>
                 <br />
                 <button className='main-button' >Remove</button>
        </div>
    );
};

export default ReviewItem;