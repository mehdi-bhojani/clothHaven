import React from 'react';
import { Link } from 'react-router-dom';

const LoginToProced = () => {
  return (
    <div className="container-fluid  text-center loginToContinue">
      <h1>Login to Continue</h1>
      <p>You need to be logged in to access this page.</p>
      <Link to="/login" className="bg__secondary2 slider__btn primary__btn">
        Login
      </Link>
    </div>
  );
};

export default LoginToProced;
