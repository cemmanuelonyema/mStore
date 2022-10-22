//dependencies import
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

//local files import
import {
  StyledAuthNav,
  StyledHeader,
  StyledNav,
  StyledNavIcon,
} from './StyledNav';
import {
  selectCartHidden,
  selectCartItemsCount,
  selectShopPageActive,
  shopPageActive,
  shopPageInActive,
  toggleCartHidden,
} from '../../../redux/slices/cartSlice';
import { CartDropDown } from '../../cart/cartDropDown/CartDropDown';
import {
  selectNavActive,
  updateNavStatus,
} from '../../../redux/slices/appSlice';

//component
export const Nav = () => {
  const isCartHidden = useSelector(selectCartHidden);
  const isShopPageActive = useSelector(selectShopPageActive);
  const itemsCount = useSelector(selectCartItemsCount);

  //hooks
  const dispatch = useDispatch();
  const isNavActive = useSelector(selectNavActive);

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

          <ul className={` ${isNavActive ? 'open' : ''} `}>
            <li>
              <Link onClick={() => dispatch(toggleCartHidden())}>
                <FiShoppingCart className="icon" />
                <span>{itemsCount}</span>
              </Link>
            </li>
            <li>
              <a href="">Sign Up</a>
            </li>
            <NavIcon />
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
          <ul className={` ${isNavActive ? 'open' : ''} `}>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Collections</a>
            </li>
            <li>
              <a href="">Newsletter</a>
            </li>
            <li>
              <a href="">Contact us</a>
            </li>
            <Link
              to="/shop"
              className="btn shop"
              onClick={() => dispatch(shopPageActive())}
            >
              Shop Now
            </Link>
          </ul>
          <NavIcon />
        </StyledNav>
      )}
    </StyledHeader>
  );
};

const NavIcon = () => {
  const dispatch = useDispatch();

  const isNavActive = useSelector(selectNavActive);
  console.log(isNavActive);

  return (
    <div
      onClick={() => dispatch(updateNavStatus())}
      className={`menuIcon ${isNavActive ? 'open' : ''} `}
    >
      <span className="menuIcon__bar menuIcon__bar--1"></span>
      <span className="menuIcon__bar menuIcon__bar--2"></span>
      <span className="menuIcon__bar menuIcon__bar--3"></span>
    </div>
  );
};
