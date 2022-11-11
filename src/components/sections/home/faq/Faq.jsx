import React from 'react';
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectFaqActive,
  updateFaqStatus,
} from '../../../../redux/slices/appSlice';
import { StyledFaq } from './StyledFaq';

export const Faq = () => {
  const questions = [
    {
      id: 1,
      title: ' My card is not being accepted 1 ',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio adipisci quo aliquid repellendus cupiditate eum                 architecto magni! Natus, rem aliquid.',
    },
    {
      id: 2,
      title: ' My card is not being accepted 2',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio adipisci quo aliquid repellendus cupiditate eum                 architecto magni! Natus, rem aliquid.',
    },
    {
      id: 3,
      title: ' My card is not being accepted 3',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio adipisci quo aliquid repellendus cupiditate eum                 architecto magni! Natus, rem aliquid.',
    },
    {
      id: 4,
      title: ' My card is not being accepted 4',
      answer:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio adipisci quo aliquid repellendus cupiditate eum                 architecto magni! Natus, rem aliquid.',
    },
  ];

  const dispatch = useDispatch();
  const isFaqOpen = useSelector(selectFaqActive);
  console.log(isFaqOpen);
  //functions
  const handleFaqToggle = (e) => {
    console.log(e);
    dispatch(updateFaqStatus());
  };
  return (
    <StyledFaq>
      <div className="container">
        <h2> Some frequently asked common questions </h2>

        <div className="content">
          {questions.map(({ id, title, answer }) => (
            <article
              className={`question__group ${isFaqOpen ? 'open' : ''}`}
              key={id}
            >
              <header className="question__header" onClick={handleFaqToggle}>
                {isFaqOpen ? <FiChevronDown /> : <FiChevronRight />}

                <h3 className="question__item-title">{title}</h3>
              </header>

              <div className="question__content">
                <p className="question__answer">{answer}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </StyledFaq>
  );
};
