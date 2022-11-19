import styled from 'styled-components';

export const StyledHero = styled.section`
  border: 1px solid black;
  margin-top: 7rem;
  visibility: hidden;

  .hero__container {
    max-width: 120rem;
    min-height: 70vh;
    /* height: 100vh; */
    margin: 0 auto;
    padding: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 6.4rem;

    @media screen and (max-width: 37.5em) {
      flex-direction: column;
    }
  }
`;

export const Content = styled.div`
  width: 50%;
  @media screen and (max-width: 37.5em) {
    width: 100%;
  }
  .content__inner {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin: 0 auto;

    h1 {
      font-weight: bold;
      font-size: 3.2rem;
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

  @media screen and (max-width: 37.5em) {
    width: 100%;
  }
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
      @media screen and (max-width: 37.5em) {
        bottom: 20rem;
      }
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
