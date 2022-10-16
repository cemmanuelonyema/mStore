//dependencies import
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

//local files import
import { StyledAuthNav, StyledHeader, StyledNav } from './StyledNav';
import {
  selectCartHidden,
  selectShopPageActive,
  shopPageActive,
  shopPageInActive,
  toggleCartHidden,
} from '../../../redux/slices/cartSlice';
import { CartDropDown } from '../../cart/cartDropDown/CartDropDown';

//component
export const Nav = () => {
  const isCartHidden = useSelector(selectCartHidden);
  const isShopPageActive = useSelector(selectShopPageActive);

  //hooks
  const dispatch = useDispatch();

  //return jsx
  return (
    <StyledHeader>
      {isShopPageActive ? (
        <StyledAuthNav>
          <Link
            to="/"
            className="logo-box"
            onClick={() => dispatch(shopPageInActive())}
          >
            <img src="" alt="logo" />
          </Link>

          <ul>
            <li>
              <Link onClick={() => dispatch(toggleCartHidden())}>
                <FiShoppingCart className="icon" />
                <span>8</span>
              </Link>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
          </ul>
          {isCartHidden ? null : <CartDropDown />}
        </StyledAuthNav>
      ) : (
        <StyledNav>
          <Link
            to="/"
            className="logo-box"
            onClick={() => dispatch(shopPageInActive())}
          >
            <img src="" alt="logo" />
          </Link>
          <ul>
            <li>
              <a href="">About</a>
            </li>
            {/* <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Newsletter</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li> */}
            <Link
              to="/shop"
              className="btn shop"
              onClick={() => dispatch(shopPageActive())}
            >
              Shop Now
            </Link>
          </ul>
        </StyledNav>
      )}
    </StyledHeader>
  );
};
