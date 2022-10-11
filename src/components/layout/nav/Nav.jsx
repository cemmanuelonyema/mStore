import React from 'react';
import { Link } from 'react-router-dom';
import { StyledHeader, StyledNav } from './StyledNav';

export const Nav = () => {
  return (
    <StyledHeader>
      <StyledNav>
        <Link to="/" className="logo-box">
          <img src="" alt="logo" />
        </Link>
        <ul>
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
          <Link to="/shop" className="btn shop">
            Shop Now
          </Link>
        </ul>
      </StyledNav>
    </StyledHeader>
  );
};
