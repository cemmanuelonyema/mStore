import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import {
  selectCartItems,
  toggleCartHidden,
} from '../../../redux/slices/cartSlice';
import { StyledCartDropDown } from './StyledCartDropDown';

export const CartDropDown = () => {
  //hooks
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  //functions
  const handleCheckout = () => {
    navigate('/checkout');
    dispatch(toggleCartHidden());
  };

  //jsx
  return (
    <StyledCartDropDown>
      <span className="cartHeader">Cart</span>
      <div className="cartItems">
        {cartItems.length ? (
          ''
        ) : (
          <span className="empty-message">Your cart is empty </span>
        )}
      </div>
      <button onClick={handleCheckout}>Checkout</button>
    </StyledCartDropDown>
  );
};
