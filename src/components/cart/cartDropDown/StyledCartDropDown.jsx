import styled from 'styled-components';

export const StyledCartDropDown = styled.article`
  width: 25rem;
  height: 35rem;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  position: absolute;
  top: 7rem;
  right: 3rem;
  z-index: 5;
  background-color: #fff;
  transition: all 1s ease-in-out;

  .cartHeader {
    padding: 1rem 2.4rem;
    border-bottom: 1px solid black;
  }

  .cartItems {
    padding: 2.4rem;
    height: 25rem;
    display: flex;
    flex-direction: column;
    overflow: auto;
    margin-bottom: 1rem;
  }
`;
