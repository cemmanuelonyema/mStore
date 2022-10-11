import React from 'react';
import { StyledFooter, StyledFooterNav } from './StyledFooter';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="left">
          <div className="logo-box">
            <img src="" alt="logo" classNameName="logo-box__img" />
          </div>
          <p className="left-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi,
            at. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Excepturi, at. Lorem ipsum.
          </p>
          <ul className="left-list">
            <li className="nav-item">
              <a href="" className="nav-link">
                {/* <FiMail className="nav-icon" /> */}
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                {/* <FiInstagram className="nav-icon" /> */}
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                {/* <FiTwitter className="nav-icon" /> */}
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                {/* <FiLinkedin className="nav-icon" /> */}
              </a>
            </li>
          </ul>
        </div>

        <StyledFooterNav>
          <ul className="nav-list">
            <h4 className="nav-heading">Company</h4>
            <li className="nav-item">
              <a href="" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Terms
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Privacy Policy
              </a>
            </li>
          </ul>
          <ul className="nav-list">
            <h4 className="nav-heading">More</h4>
            <li className="nav-item">
              <a href="" className="nav-link">
                Documentation
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Commitment
              </a>
            </li>
          </ul>
          <div class="footer__cards">
            <h4 class="footer__title">We accept all credit cards</h4>
            <ul>
              <li>
                <img src="img/visa.png" alt="visa card" />
              </li>
              <li>
                <img src="img/paypal.png" alt="paypal" />
              </li>
              <li>
                <img src="img/mastercard.png" alt="mastercard" />
              </li>
            </ul>
          </div>
        </StyledFooterNav>
      </div>
    </StyledFooter>
  );
};
