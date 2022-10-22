import styled from 'styled-components';

export const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 120rem;
  margin: 0 auto;
  padding: 1.6rem 3.2rem;

  ul {
    display: flex;
    align-items: center;

    @media screen and (max-width: 37.5em) {
      flex-direction: column;
      align-items: flex-start;
      width: 70%;
      height: 100%;
      background-color: var(--white);
      background-color: #fff;
      color: var(--white);
      position: fixed;
      top: 0;
      right: -100%;
      //   border: 5px solid black;
      padding: 0 2rem;
      transition: all ease-in-out 0.5s;
      z-index: 100;
    }
  }

  ul.open {
    right: 0;
  }

  a {
    padding: 1rem;
  }
  .shop {
    margin-left: 2rem;
  }
`;

export const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  z-index: 20;
  top: 0;
  left: 0;
  right: 0;

  background-color: #fff;

  .menuIcon {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    cursor: pointer;
    border: 1px solid black;
    padding: 1rem;

    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.7rem;
    z-index: 250;

    @media screen and (max-width: 37.5em) {
      display: flex;
    }

    &__bar {
      background-color: #000;
      display: inline-block;
      height: 3px;
      width: 3rem;
      border-radius: 4px;
      transition: all ease-in-out 0.4s;

      &--1 {
      }
      &--2 {
      }
      &--3 {
      }
    }
  }

  // Active state on open

  .menuIcon.open {
    /* background-color: rgb(25, 25, 25); */
    transition: all ease-in-out 0.4s;

    .menuIcon__bar {
      transition: all ease-in-out 0.4s;

      &--1 {
        transform: translateY(10px) rotate(45deg);
      }
      &--2 {
        transform: translateX(-2.5rem);
        background-color: transparent;
      }
      &--3 {
        transform: translateY(-10px) rotate(-45deg);
      }
    }
  }
`;

export const StyledAuthNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  max-width: 120rem;
  margin: 0 auto;
  padding: 1.6rem 3.2rem;

  ul {
    display: flex;
    align-items: center;
  }

  a {
    padding: 1rem;
    position: relative;

    span {
      border-radius: 50%;
      position: absolute;
      top: 1px;
      right: -1px;
      width: 1.8rem;
      height: 1.8rem;
      background-color: black;
      color: #fff;
      font-size: 1.2rem;
      font-weight: bold;

      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .icon {
    font-size: 1.8rem;
  }
`;

export const StyledNavIcon = styled.div``;
