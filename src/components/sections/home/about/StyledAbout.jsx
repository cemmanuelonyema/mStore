import styled from 'styled-components';

export const StyledAbout = styled.section`
  border: 1px solid black;
  padding: 1rem;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 3rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 7.4rem;
    /* grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr)); */
    align-items: center;

    @media screen and (max-width: 37.5em) {
      grid-template-columns: 1fr;
      grid-auto-flow: dense;
      gap: 0.4rem;
    }

    .about__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;

      @media screen and (max-width: 37.5em) {
        order: -1;
      }
    }
    .about__image {
      height: 70%;
    }
    .features {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2.4rem;

      @media screen and (max-width: 37.5em) {
        grid-template-columns: 1fr;
      }

      .feature-box {
        padding: 1.6rem;
        border-radius: 8px;
        overflow: hidden;
        transition: all 0.4s ease-in-out;
        border: 1px solid #777;

        &:hover {
          transform: scale(1.05);
          //box shadow
        }
      }
    }
  }
`;
