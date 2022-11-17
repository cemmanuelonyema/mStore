import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { CheckoutItem } from '../../components/checkout/checkoutItem/CheckoutItem';
import { selectCartItems, selectCartTotal } from '../../redux/slices/cartSlice';
import { StyledCheckout } from './StyledCheckout';

export const Checkout = () => {
  const cartItems = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  return (
    <StyledCheckout>
      <div className="container">
        <div className="checkout__items">
          {cartItems?.map((cartItem) => (
            <CheckoutItem key={cartItem.id} cartItem={cartItem} />
          ))}
        </div>
        <div className="total">
          <span>TOTAL : {total}</span>
        </div>
        <Link to="/shop" className="btn">
          Go back to shop
        </Link>
      </div>
    </StyledCheckout>
  );
};
