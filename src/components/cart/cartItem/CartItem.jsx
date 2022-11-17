import React from 'react';
import { StyledCartItem } from './StyledCartItem';

export const CartItem = ({ item: { imageUrl, price, name, quantity } }) => {
  return (
    <StyledCartItem>
      <div className="img-con">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <div className="price-group">
          <span className="price">
            ${price} * {quantity}
          </span>
          <span className="total">${price * quantity}</span>
        </div>
      </div>
    </StyledCartItem>
  );
};
