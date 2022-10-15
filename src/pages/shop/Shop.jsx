import React from 'react';
import { SHOP_DATA } from '../../../shopdata';
import { Preview } from '../../components/preview/Preview';
import { StyledShop } from './StyledShop';

export const Shop = () => {
  return (
    <StyledShop>
      <div className="container">
        {SHOP_DATA.map(({ id, ...otherProps }) => (
          <Preview key={id} {...otherProps} />
        ))}
      </div>
    </StyledShop>
  );
};
