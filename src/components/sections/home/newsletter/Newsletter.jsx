import React from 'react';
import { StyledNewsletter } from './StyledNewsletter';

export const Newsletter = () => {
  return (
    <StyledNewsletter id="newsletter">
      <div className="container">
        {' '}
        <div className="content">
          <h2>Subscribe to our newsletter</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio,
            blanditiis.
          </p>
          <form>
            <input type="text" placeholder="Enter your email address" />
            <button>Subscribe</button>
          </form>
        </div>
        <div className="image"></div>
      </div>
    </StyledNewsletter>
  );
};
