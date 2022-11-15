import styled from 'styled-components';

export const StyledHero = styled.section`
  border: 1px solid black;
  margin-top: 10rem;
  /* padding-top: 25rem; */
  visibility: hidden;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 3rem;
  }

  .hero__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 24px;
    /* height: 100vh; */
  }
`;

export const Content = styled.div`
  width: 50%;
  .content__inner {
    width: 400px;
    margin: 0 auto;

    h1 {
      font-weight: bold;
      font-size: 3.2rem;
      margin-bottom: 2.4rem;
    }

    .line {
      height: 45px;
      overflow: hidden;
    }
    span {
      display: block;
    }

    p {
      font-weight: 300;
      line-height: 24px;
      font-size: 14px;
      margin-bottom: 50px;
    }

    button {
      background: none;
      cursor: pointer;
      text-transform: uppercase;
      font-weight: bold;
      display: flex;
      align-items: center;
      gap: 1rem;
      position: relative;
      padding: 1rem;

      &:focus {
        outline: none;
      }
    }
  }
`;
export const Images = styled.div`
  width: 50%;
  height: 100vh;
  position: relative;
  .images__inner {
  }

  .image-box {
    overflow: hidden;
    position: absolute;

    &--1 {
      top: 0px;
      right: 0px;
      width: 45%;
      height: 50%;
    }

    &--2 {
      bottom: 24px;
      left: 0px;
      width: 52%;
      height: 60%;
    }
    img {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: 100%;
    }
  }
`;
