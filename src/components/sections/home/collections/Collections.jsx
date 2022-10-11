import React from 'react';
import { StyledCollections } from './StyledCollection';

export const Collections = () => {
  return (
    <StyledCollections>
      <div className="container">
        <div className="col-box col-box--1">1</div>
        <div className="col-box col-box--2">2</div>
        <div className="col-box col-box--3">3</div>
        <div className="col-box col-box--4">4</div>
        <div className="col-box col-box--5">5</div>
      </div>
    </StyledCollections>
  );
};
