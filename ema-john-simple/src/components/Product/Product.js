import React from 'react';
import "./Product.css";       
import { Link } from 'react-router-dom';
const Product = (props) => {
   // Check if 'product' prop is defined
   console.log(props);
   if (!props.product || !props.product.name) {
    console.error("Product or product name is undefined");
    return null;
}
    
 const{stock,img ,name ,seller,price,key} = props.product;
    
    return (
        <div className='product'>
        
        <div >

        <img src={img} alt="" srcset="" />

        </div>

        <div className='product-name'>
        <h4 className='product-name'><Link to={"/product/"+key}>{name}
        <br /></Link> </h4>       
        <p><small>by : {seller} </small></p>
        <p>$ {price}</p>
        <br />
        <p><small>only {stock} left in stoke order -soon </small></p>
       { props.showaddtocart && <button className='main-button'  onClick={()=>props.handleproduct(props.product)}>add to cart </button>}
       <br />
        <br />
        </div>

        </div>
    );
};

export default Product;