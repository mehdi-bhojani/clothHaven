import React from 'react'
import Header from './components/header'
import Footer from './components/footer'
import { Outlet } from 'react-router-dom'
import LoginToProced from './components/LoginToProced'
import { useUser } from './context/userContext'

import { useLocation } from 'react-router-dom';

function Layout() {
  const { state } = useUser();
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';

  return (
    <>
      <Header />
      {!isLoginPage && !state.UserEmail && <LoginToProced />}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout