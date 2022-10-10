import styled from 'styled-components';

export const StyledFooter = styled.footer`
  background-color: #081315;
  font-size: 1.6rem;
  color: #777;

  .container {
    padding: 6.4rem 3.2rem;
    max-width: 120rem;
    margin: 0 auto;

    display: flex;
    gap: 6.4rem;

    @media screen and (max-width: 37.5em) {
      flex-direction: column;
    }
  }
  .left {
    flex: 1.5;

    p {
      width: 80%;
    }

    ul {
      display: flex;

      a {
        padding: 1rem;
        margin: 1rem 1.5rem 1.5rem 0;
        color: white;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background-color: #142e32;
        display: grid;
        place-content: center;
      }
    }
  }
`;

export const StyledFooterNav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex: 2;
  gap: 3.2rem;

  @media screen and (max-width: 37.5em) {
    flex-direction: column;
  }

  h4 {
    margin-bottom: 1.6rem;
    color: white;
  }

  a {
    padding: 4px 0;
  }
`;
