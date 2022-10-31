import React from 'react';
import ProductReviewsCard from './ProductReviewsCard';
import "../styles/ProductReviews.css"

const ProductReviews = ({productReviews}) => {
  return (
    <div className='productReviews'>
        {
            productReviews.map((item, index) => (
               <ProductReviewsCard key={item.image} image={item.image} review={item.review} name={item.name} price={item.price} index={index} />
            ))
        }
    </div>
  )
}

export default ProductReviews;