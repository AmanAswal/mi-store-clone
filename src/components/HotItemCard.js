import React from 'react';
import "../styles/HotItemCard.css"

const HotItemCard = ({image, index, price, name}) => {
  return (
    <div className='hotItemCard'>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>
    </div>
  )
}

export default HotItemCard