import React from 'react';
import { StyledDetail } from './StyledDetail';

export const Detail = () => {
  return (
    <StyledDetail>
      <div className="container">
        <div className="img-box">
          <img src="/img/product.jpg" alt="product image" />
        </div>
        <div className="content">
          <h3>Product Title name</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            impedit id placeat? Architecto delectus inventore, sed reprehenderit
            nulla animi perspiciatis.
          </p>

          <div className="price">
            <div className="price__main-box">
              <span className="price__main">$500</span>
              <span className="price__discount"> -50%</span>
            </div>
            <span className="price__off">
              <del>$250</del>
            </span>
          </div>

          <div className="btn-group">
            <div className="quantities">
              <span>-</span>
              <span>num</span>
              <span>+</span>
            </div>
            <button>Add to cart</button>
          </div>
        </div>
      </div>
    </StyledDetail>
  );
};
