import styled from 'styled-components';

export const StyledFaq = styled.section`
  border: 1px solid black;
  padding: 1rem;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 3rem;

    .content {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 3.2rem;

      @media screen and (max-width: 37.5em) {
        grid-template-columns: 1fr;
      }
    }
  }

  .question {
    &__group {
      padding: 1.6rem;
      border: 1px solid black;
    }

    &__header {
      background-color: black;
      color: #fff;
    }

    &__content {
      background-color: red;
    }
    ///////
    &__group.open &__header {
      background-color: yellow;
      color: green;
    }
  }
`;
