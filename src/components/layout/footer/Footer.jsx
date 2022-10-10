import React from 'react';
import { StyledFooter, StyledFooterNav } from './StyledFooter';

export const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="left">
          <div className="logo-box">
            <img src="" alt="logo" className="logo-box__img" />
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
            <h4 className="nav-heading">Services</h4>
            <li className="nav-item">
              <a href="" className="nav-link">
                Guide
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Planing
              </a>
            </li>
            <li className="nav-item">
              <a href="" className="nav-link">
                Explore nature
              </a>
            </li>
          </ul>
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
                nse
              </a>
            </li>
          </ul>
        </StyledFooterNav>
      </div>
    </StyledFooter>
  );
};

// export const  () => {
//   return (
//     <lassName="
//       <div className="container">

//         <nav className="nav">
//
//         </nav>
//       </div>
//     </  );
// };
