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
      grid-template-columns: repeat(6, minmax(min-content, 120rem));
      grid-template-rows: 25rem 25rem;
      gap: 2rem;

      @media screen and (max-width: 37.5em) {
        display: flex;
        flex-direction: column;
      }
    }

    .col-box {
      position: relative;

      button {
        width: 100%;
        padding: 1.6rem;
        background-color: black;
        color: white;
        font-weight: bold;
        position: absolute;
        bottom: 30px;
        left: 0;
        opacity: 0;
        z-index: 10;
        transition: all 0.3s;
        transform: translateY(1.6rem);
      }
      &:hover {
        button {
          transform: translateY(0px);
          opacity: 1;
        }
      }

      &--1 {
        grid-column: 1/4;
        grid-row: 1/3;
      }

      &--2 {
        grid-column: 4/7;
      }

      &--3 {
        grid-column: 4/7;
      }
    }
  }
`;
