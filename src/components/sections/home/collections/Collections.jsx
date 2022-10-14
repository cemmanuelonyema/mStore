import React from 'react';
import { Link } from 'react-router-dom';
import { StyledCollections } from './StyledCollection';

export const Collections = () => {
  const colData = [
    { id: 1, link: 'shop/suits', img: ' /img/pexels-subhan-saad-3613388.jpg' },
    {
      id: 2,
      link: 'shop/watches',
      img: ' /img/pexels-fernando-arcos-190819.jpg',
    },
    {
      id: 3,
      link: 'shop/sneakers',
      img: '/img/maxim-hopman-8cT5ja0P_N4-unsplash.jpg',
    },
  ];
  return (
    <StyledCollections>
      <div className="container">
        <h2>Collections</h2>
        <div className="cols-content">
          {colData.map(({ img, id, link }) => (
            <Link className={`col-box col-box--${id}`} key={id} to={link}>
              <img src={img} alt="collection image" />
              <button>View collection </button>
            </Link>
          ))}

          {/* <div className="col-box col-box--1">
            <img
              src="../../../../../public/img/pexels-subhan-saad-3613388.jpg"
              alt="collection image"
            />{' '}
          </div>
          <div className="col-box col-box--2">
            <img
              src="../../../../../public/img/pexels-fernando-arcos-190819.jpg"
              alt="collection image"
            />
          </div>
          <div className="col-box col-box--3">
            <img
              src="../../../../../public/img/maxim-hopman-8cT5ja0P_N4-unsplash.jpg"
              alt="collection image"
            />
          </div> */}
        </div>
      </div>
    </StyledCollections>
  );
};
