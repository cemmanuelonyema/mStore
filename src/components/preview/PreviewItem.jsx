import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';
import { StyledPreviewItem } from './StyledPreview';

export const PreviewItem = ({ item }) => {
  const dispatch = useDispatch();

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
      <button
        className="previewItem__button"
        onClick={() => dispatch(addItem(item))}
      >
        Add to Cart
      </button>
    </StyledPreviewItem>
  );
};
