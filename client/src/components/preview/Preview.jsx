import React from 'react';
import { PreviewItem } from './PreviewItem';
import { StyledPreview } from './StyledPreview';

export const Preview = ({ title, items }) => {
  return (
    <StyledPreview>
      <h1 className="preview__title">{title}</h1>
      <div className="preview__items">
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <PreviewItem key={item.id} item={item} />
          ))}
      </div>
    </StyledPreview>
  );
};
