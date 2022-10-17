import styled from 'styled-components';

export const StyledCartItem = styled.article`
  width: 100%;
  display: flex;
  height: 5rem;
  margin-bottom: 15px;

  .img-con {
    width: 20%;
  }

  .item-details {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 10px 20px;

    .name {
      font-size: 16px;
    }
  }

  .price-group {
    display: flex;
    align-items: center;
    gap: 1rem;

    .price {
      color: #777;
      font-size: 1.4rem;
    }

    .total {
      font-weight: bold;
    }
  }
`;
