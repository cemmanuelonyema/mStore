import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from './layout';

export const App = () => {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Layout />}></Route>
      </Routes>
    </Fragment>
  );
};
