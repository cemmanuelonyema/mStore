import styled from 'styled-components';

export const StyledCollections = styled.section`
  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 3rem;

    h2 {
      margin-bottom: 2rem;
    }

    .cols-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;

      @media screen and (max-width: 37.5em) {
        grid-template-columns: 1fr;
      }
    }

    .col-box {
      display: flex;
      flex-direction: column;
      gap: 0.8rem;

      &:hover {
        button {
          gap: 2rem;
        }
      }

      button {
        display: inline-flex;
        gap: 1rem;
        padding: 1.6rem 0;
        transition: all 0.6s;
      }
    }
  }
`;
