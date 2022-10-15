import React from 'react';
import { StyledPreviewItem } from './StyledPreview';

export const PreviewItem = ({ item }) => {
  const { name, imageUrl, price } = item;
  return (
    <StyledPreviewItem>
      <div
        className="previewItem__img"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="previewItem__footer">
        <span className="previewItem__name">{name}</span>
        <span className="previewItem__price">${price}</span>
      </div>
      <button className="previewItem__button"> Add to Cart</button>
    </StyledPreviewItem>
  );
};
