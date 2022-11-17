//dependencies import
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FiShoppingCart } from 'react-icons/fi';

//local files import
import { StyledAuthNav, StyledHeader, StyledNav } from './StyledNav';
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
  //selector hooks
  const isCartHidden = useSelector(selectCartHidden);
  const isShopPageActive = useSelector(selectShopPageActive);
  const itemsCount = useSelector(selectCartItemsCount);
  const isNavActive = useSelector(selectNavActive);

  //hooks
  const dispatch = useDispatch();

  //funcs
  const handleNavToggle = () => dispatch(updateNavStatus());

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
            <li onClick={handleNavToggle}>
              <Link onClick={() => dispatch(toggleCartHidden())}>
                <FiShoppingCart className="icon" />
                <span>{itemsCount}</span>
              </Link>
            </li>
            <li onClick={handleNavToggle}>
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
          <ul className={` ${isNavActive ? 'open' : ''} `}>
            <li onClick={handleNavToggle}>
              <a href="#about">About</a>
            </li>
            <li onClick={handleNavToggle}>
              <a href="#collections">Collections</a>
            </li>
            <li onClick={handleNavToggle}>
              <a href="#newsletter">Newsletter</a>
            </li>
            <li onClick={handleNavToggle}>
              <a href="#contact">Contact us</a>
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
