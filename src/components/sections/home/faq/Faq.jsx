import React from 'react';
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
  return (
    <StyledFaq>
      <div className="container">
        <h2> Some frequently asked common questions </h2>
        <div className="content">
          {questions.map(({ id, title, answer }) => (
            <div className="question__group" key={id}>
              <div className="question__item">
                <header className="questions_header">
                  <span>icon</span>
                  <h3 className="question__item-title">{title}</h3>
                </header>

                <div className="question__content">
                  <p className="question__answer">{answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </StyledFaq>
  );
};
