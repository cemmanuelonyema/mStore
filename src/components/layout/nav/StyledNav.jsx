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
  }
  a {
    padding: 1rem;
  }
  .shop {
    margin-left: 2rem;
  }
`;

export const StyledHeader = styled.header``;

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
