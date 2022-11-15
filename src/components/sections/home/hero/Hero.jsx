import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { Content, Images, StyledHero } from './StyledHero';

export const Hero = () => {
  let app = useRef(null);
  let images = useRef(null);
  let tl = gsap.timeline();
  let content = useRef(null);

  useEffect(() => {
    gsap.to(app, { duration: 0, css: { visibility: 'visible' } });

    //images vars
    const img1 = images.firstElementChild;
    const img2 = images.lastElementChild;

    //content vars
    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const contentP = content.children[1];
    const contentButton = content.children[2];

    //images animation
    tl.from(
      img1,
      {
        opacity: 0,
        duration: 2.6,
        y: 1200,
        ease: 'power4.inOut',
      },
      'Start'
    )
      .from(
        img1.firstElementChild,
        {
          duration: 2,
          scale: 1.6,
          ease: 'power4.inOut',
        },
        ' +=1.2  '
      )
      .from(
        img2,
        {
          opacity: 0,
          duration: 2.6,
          y: 600,
          ease: 'power4.inOut',
        },
        ' +=1.2  '
      )
      .from(
        img2.firstElementChild,
        {
          duration: 2,
          scale: 1.6,
          ease: 'power4.inOut',
        },
        ' +=1.2  '
      );

    //content animation
    tl.from(
      [headlineFirst.children, headlineSecond.children, headlineThird.children],
      {
        delay: 1.8,
        opacity: 0,
        duration: 2,
        y: 44,
        ease: 'power4.inOut',
        stagger: {
          amount: 0.8,
        },
      },
      'Start'
    )
      .from(
        contentP,
        { delay: 2, duration: 1, y: 20, opacity: 0, ease: 'power4.inOut' },
        ' +=1.2'
      )
      .from(
        contentButton,
        { delay: 2.2, y: 20, duration: 1, opacity: 0, ease: 'power4.inOut' },
        ' +=1.6'
      );

    // tl.from(img1, {
    //   opacity: 0,
    //   duration: 2.6,
    //   y: 1200,
    //   ease: 'power4.inOut',
    // })
    //   .from(img1.firstElementChild, {
    //     duration: 2,
    //     scale: 1.6,
    //     ease: 'power4.inOut',
    //   })
    //   .from(img2, {
    //     opacity: 0,
    //     duration: 2.6,
    //     y: 1200,
    //     ease: 'power4.inOut',
    //   })
    //   .from(img2.firstElementChild, {
    //     duration: 2,
    //     scale: 1.6,
    //     ease: 'power4.inOut',
    //   });
  }, []);

  return (
    <StyledHero ref={(el) => (app = el)}>
      <div className="hero__container">
        <div className="hero__inner">
          <Content>
            <div className="content__inner" ref={(el) => (content = el)}>
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
            <div className="images__inner" ref={(el) => (images = el)}>
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
