import styled from 'styled-components';

export const StyledPreview = styled.section`
  .preview__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3.2rem;
    margin-bottom: 2.4rem;

    @media screen and (max-width: 37.5em) {
      grid-template-columns: repeat(2, 1fr);
      gap: 1.6rem;
      row-gap: 3.2rem;
    }
  }
`;

export const StyledPreviewItem = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 350px;

  .previewItem {
    &__footer {
      width: 100%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 18px;
    }

    &__price {
      font-weight: bolder;
    }

    &__img {
      width: 100%;
      height: 95%;

      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
      transition: all 0.3s;
    }

    &__button {
      width: 80%;
      position: absolute;
      bottom: 40px;
      opacity: 0;
      transition: all 0.3s;
      padding: 1rem;
      background-color: #000;
      color: #fff;
      font-weight: bold;
      transform: translateY(1rem);
    }
  }

  &:hover {
    .previewItem {
      &__button {
        transform: translateY(0px);
        opacity: 1;
      }
    }
  }
`;
