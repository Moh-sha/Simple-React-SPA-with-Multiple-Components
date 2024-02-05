import React from 'react';
import { useParams } from 'react-router-dom';
import fakeData from '../../fakeData';
import Product from '../Product/Product';

const ProductDetails = () => {
   
    const {key} = useParams();
    const new_product = fakeData.find(pd => pd.key === key);
    console.log(new_product);
    return (
        <div>
            <h1>Product Details. </h1>
            <Product showaddtocart={false} product={new_product}></Product>
        </div>
    );
};

export default ProductDetails;