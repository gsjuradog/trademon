import React, { useEffect } from 'react';

import { withRouter, useHistory, useLocation } from 'react-router-dom';

import { loginError } from '../../utils/animations';

import '../../styling/login.scss';

const LoginError = ({clearError} : any) => {

  const history = useHistory();
  const location = useLocation()

  const errorHandler = () => {
    clearError();
    history.push('/login');
  }

  useEffect(() => {
    loginError();
  }, [location])

  return (
    <div className="login-error-container">
    <div className="login-error-message">
    <h1>Uh oh...</h1>
      <img className="error-pikachu" src={'/assets/suprised-pikachu.png'} alt="suprised-pik"/>
      <p>Something went wrong...</p>
      <button onClick={errorHandler}>Back</button>
    </div>
  </div>
  )
}

export default withRouter(LoginError);