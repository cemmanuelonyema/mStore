import React from 'react';
import { useSelector } from 'react-redux';
import { CheckoutItem } from '../../components/checkout/checkoutItem/CheckoutItem';
import { selectCartItems } from '../../redux/slices/cartSlice';
import { StyledCheckout } from './StyledCheckout';

export const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  return (
    <StyledCheckout>
      <div className="container">
        {cartItems?.map((cartItem) => (
          <CheckoutItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
    </StyledCheckout>
  );
};
