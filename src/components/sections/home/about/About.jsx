import React from 'react';
import { StyledAbout } from './StyledAbout';

export const About = () => {
  return (
    <StyledAbout id="about">
      <div className="container">
        <div className="about__image">
          <img src="" alt="about us image" />
        </div>
        <div className="about__content">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            aperiam harum aut dicta porro pariatur omnis id veritatis ut itaque!
          </p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo
            aperiam harum aut dicta porro pariatur omnis id veritatis ut itaque!
          </p>
        </div>
      </div>
    </StyledAbout>
  );
};
