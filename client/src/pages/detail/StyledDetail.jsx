import styled from 'styled-components';

export const StyledDetail = styled.section`
  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 3rem;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3.2rem;
    align-items: center;

    @media screen and (max-width: 37.5em) {
      grid-template-columns: 1fr;
    }
  }

  .img-box {
    /* width: 30rem; */
    height: 30rem;
  }

  .content {
    display: flex;
    gap: 2.4rem;
    flex-direction: column;
  }

  .price {
    @media screen and (max-width: 37.5em) {
      display: flex;
      justify-content: space-between;
    }
    &__main-box {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    &__main {
      font-weight: bold;
      font-size: 2.4rem;
    }

    &__discount {
      border: 1px solid black;
      padding: 0.5rem;
      background-color: black;
      color: white;
      font-size: 1rem;
      font-weight: bold;
      border-radius: 5px;
    }

    &__off {
    }
  }

  .btn-group {
    display: flex;
    gap: 2rem;

    @media screen and (max-width: 37.5em) {
      flex-direction: column;
    }

    .quantities {
      display: flex;
      gap: 1rem;
    }
  }
`;
