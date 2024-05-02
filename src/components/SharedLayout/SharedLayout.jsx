import { Suspense } from 'react';
import { Outlet } from 'react-router';
import { Header, Loader } from '../';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
