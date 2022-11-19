import React from 'react';
import { StyledAbout } from './StyledAbout';

export const About = () => {
  return (
    <StyledAbout id="about">
      <div className="container">
        <div className="about__image">
          <img
            src="/public/img/dami-adebayo-k6aQzmIbR1s-unsplash.jpg"
            alt="about us image"
          />
        </div>
        <div className="about__content">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            aperiam harum aut dicta porro pariatur omnis id veritatis ut itaque!
          </p>
          <div className="features">
            <div className="feature-box">
              <div>icon</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                excepturi.
              </p>
            </div>
            <div className="feature-box">
              <div>icon</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                excepturi.
              </p>
            </div>
            <div className="feature-box">
              <div>icon</div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga,
                excepturi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </StyledAbout>
  );
};
