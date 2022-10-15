import React from 'react';
import { useNavigate } from 'react-router-dom';
import { StyledCartDropDown } from './StyledCartDropDown';

export const CartDropDown = () => {
  //hooks
  const navigate = useNavigate();
  //functions
  const handleCheckout = () => {
    navigate('/checkout');
  };

  //jsx
  return (
    <StyledCartDropDown>
      <span className="cartHeader">Cart</span>
      <div className="cartItems"></div>
      <button onClick={handleCheckout}>Checkout</button>
    </StyledCartDropDown>
  );
};
