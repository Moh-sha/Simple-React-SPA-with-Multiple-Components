import React from 'react';
       
const Product = (props) => {
   // Check if 'product' prop is defined
   if (!props.product || !props.product.name) {
    console.error("Product or product name is undefined");
    return null;
}


    
    return (
        <div>
        {props.product.name}
    </div>
    );
};

export default Product;