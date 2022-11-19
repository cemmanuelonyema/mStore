import styled from 'styled-components';

export const StyledNewsletter = styled.section`
  background-color: #f6f6f6;
  padding: 1rem;

  .container {
    max-width: 120rem;
    margin: 0 auto;
    padding: 3rem;
  }
  .content {
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h2 {
      font-size: 4rem;
      font-weight: bold;
    }

    form {
      display: flex;
      width: fit-content;
      background-color: #fff;
      box-shadow: 0 2rem 5rem rgba(0, 0, 0, 0.1);

      input {
        padding: 1.2rem;
      }

      button {
        padding: 1.2rem 3.2rem;
        background-color: #000;
        color: #fff;
      }
    }
  }
`;
