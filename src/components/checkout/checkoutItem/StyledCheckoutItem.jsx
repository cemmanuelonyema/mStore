import styled from 'styled-components';

export const StyledCheckoutItem = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  margin-bottom: 2.4rem;
  border-bottom: 1px solid black;

  .img-con {
    width: 7rem;
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

  .left-panel {
    display: flex;
    align-items: center;

    .add,
    .remove {
      justify-content: center;
      align-items: center;
      cursor: pointer;
      padding: 5px;
      border-radius: 50%;
      border: 1px solid #000;
      font-size: 1.4rem;
      height: 2.4rem;
      width: 2.4rem;
      display: flex;
    }

    .quantity {
      padding: 1rem;
    }
  }
`;
