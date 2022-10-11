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
    gap: 3.2rem;

    .about__content {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }
  }
`;
