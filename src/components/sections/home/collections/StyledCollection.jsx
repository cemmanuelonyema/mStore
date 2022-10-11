import styled from 'styled-components';

export const StyledCollections = styled.section`
  border: 2px solid black;
  padding: 1rem;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 3rem;

    display: grid;
    grid-template-columns: repeat(6, minmax(min-content, 120rem));
    gap: 2rem;

    .col-box {
      padding: 2rem;
      border: 1px solid black;

      &--1 {
        grid-column: 1/3;
      }
      &--2 {
        grid-column: 3/5;
      }
      &--3 {
        grid-column: 5/7;
      }
      &--4 {
        grid-column: 1/4;
      }
      &--5 {
        grid-column: 4/7;
      }
    }
  }
`;
