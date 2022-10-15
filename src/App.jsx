import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout';
import { GlobalStyle } from './style/GlobalStyle';

//pages
import { Home } from './pages/home/Home';
import { NotFound } from './pages/notFound/NotFound';
import { Shop } from './pages/shop/Shop';
import { Checkout } from './pages/checkout/Checkout';
import { Collection } from './pages/collection/Collection';
import { Detail } from './pages/detail/Detail';

export const App = () => {
  return (
    <Fragment>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:collectionItem" element={<Collection />} />
          <Route path="productDetail/:productItem" element={<Detail />} />
          <Route path="checkout" element={<Checkout />} />

          <Route index path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Fragment>
  );
};
