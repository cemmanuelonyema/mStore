import React from 'react';
import { Content, Images, StyledHero } from './StyledHero';

export const Hero = () => {
  return (
    <StyledHero>
      <div className="hero__container">
        <div className="hero__inner">
          <Content>
            <div className="content__inner">
              <h1>
                <div className="line">
                  <span>Relieveing the burden of</span>
                </div>
                <div className="line">
                  <span>lack of premium wears </span>
                </div>
                <div className="line">
                  <span>for men</span>
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
            </div>
          </Content>
          <Images>
            <div className="images__inner">
              <div className="image-box image-box--1">
                <img
                  src="/public/img/suits/janko-ferlic-G-jo31ESuRE-unsplash.jpg"
                  alt=""
                />
              </div>
              <div className="image-box  image-box--2">
                <img
                  src="/public/img/suits/khalid-boutchich-wS1k0VzXVrA-unsplash.jpg"
                  alt=""
                />
              </div>
            </div>
          </Images>
        </div>
      </div>
    </StyledHero>
  );
};
