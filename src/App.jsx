import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { GlobalStyle } from './style/GlobalStyle';

//pages
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';
import { Shop } from './pages/shop/Shop';

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route index path="shop" element={<Shop />} />

          <Route index path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Fragment>
  );
};
