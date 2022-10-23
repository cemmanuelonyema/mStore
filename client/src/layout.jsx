import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import { Footer } from './components/layout/footer/Footer';
import { Nav } from './components/layout/nav/Nav';

export const Layout = () => (
  <Fragment>
    <main>
      <Nav />
      <Outlet />
    </main>
    <Footer />
  </Fragment>
);
