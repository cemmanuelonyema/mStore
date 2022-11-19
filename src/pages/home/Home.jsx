import React, { Fragment } from 'react';
import { About } from '../../components/sections/home/about/About';
import { Collections } from '../../components/sections/home/collections/Collections';
import { Contact } from '../../components/sections/home/contact/Contact';
import { Faq } from '../../components/sections/home/faq/Faq';
import { Featured } from '../../components/sections/home/featured/Featured';
import { Hero } from '../../components/sections/home/hero/Hero';
import { Newsletter } from '../../components/sections/home/newsletter/Newsletter';

export const Home = () => {
  return (
    <Fragment>
      <Hero />
      <About />
      <Collections />
      <Newsletter />
    </Fragment>
  );
};
