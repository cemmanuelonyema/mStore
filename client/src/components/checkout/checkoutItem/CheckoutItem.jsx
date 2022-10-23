import React from 'react';
import { StyledCheckoutItem } from './StyledCheckoutItem';
import { FiPlus, FiMinus, FiTrash } from 'react-icons/fi';
import { addItem, removeItem } from '../../../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';

export const CheckoutItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { imageUrl, price, name, quantity } = cartItem;
  return (
    <StyledCheckoutItem>
      <div className="img-con">
        <img src={imageUrl} alt={name} />
      </div>
      <div className="item-details">
        <span className="name">{name}</span>
        <div className="price-group">
          {/* <span className="price">
            ${price} * {quantity}
          </span> */}
          <span className="total">${price * quantity}.00</span>
        </div>
        <div className="left-panel">
          {/* <div className="title">Quantity</div> */}
          <div
            className="remove"
            onClick={() => dispatch(removeItem(cartItem))}
          >
            {quantity === 1 ? <FiTrash /> : <FiMinus />}
          </div>
          <div className="quantity">{quantity}</div>
          <div className="add" onClick={() => dispatch(addItem(cartItem))}>
            <FiPlus />
          </div>
        </div>
      </div>
    </StyledCheckoutItem>
  );
};
