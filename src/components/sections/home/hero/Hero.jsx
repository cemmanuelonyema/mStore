import React from 'react';
import { Content, Images, StyledHero } from './StyledHero';

export const Hero = () => {
  return (
    <StyledHero>
      <div className="container">
        <Content>
          <h1>
            <div className="line">
              <p>Relieveing the burden</p>
            </div>
            <div className="line">
              <p>of disease caused </p>
            </div>
            <div className="line">
              <p>by behavior</p>
            </div>
          </h1>
          <p>
            Lorem jhskhdbjsn nsn hsmn jjs jj Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Minus, doloremque!
          </p>
          <button>
            Explore
            <span> ➡️ </span>
          </button>
        </Content>
        <Images>
          <div className="">
            <img
              src="/public/img/suits/janko-ferlic-G-jo31ESuRE-unsplash.jpg"
              alt=""
            />
          </div>
          <div className="">
            <img
              src="/public/img/suits/khalid-boutchich-wS1k0VzXVrA-unsplash.jpg"
              alt=""
            />
          </div>
        </Images>
      </div>
    </StyledHero>
  );
};
