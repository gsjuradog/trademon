import React, { useState, useEffect } from 'react';

import { withRouter, useHistory } from 'react-router-dom';

import LoginError from '../modal/loginError';

import { createUser as createREST, signInUser as signInREST } from '../../utils/rest'
import { Create, SignIn } from '../../utils/interfaces';

import { panelRight, panelLeft, setUp } from '../../utils/animations';
import '../../styling/login.scss';

const Login = () => {

  const history = useHistory();

  const initialCreate : Create = {
    name : '',
    email: '',
    password: '',
  }

  const initialSignIn : SignIn = {
    email: '',
    password: ''
  }

  const [create, setCreateState] = useState(initialCreate);
  const [signIn, setSignInState] = useState(initialSignIn);
  const [loginError, setError] = useState(false);

  useEffect(() => {setUp();}, []);
  useEffect(() => {setUp();}, [loginError]);
  
  const createUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await createREST(create);
    if (result.hasOwnProperty('token')) {
      history.push('/')
    } else if (result.hasOwnProperty('error')) {
        setError(result.error);
    } else {
        setError(true); 
    } 
  }

  const createState = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    let createCopy = {...create};

    switch(name) {
      case 'username':
        createCopy.name = value;
        break;
      case 'email':
        createCopy.email = value;     
        break;
      case 'password':
        createCopy.password = value;
      break;
        default:
        return 
    }  
    setCreateState(createCopy);
  }

  const signInUser = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await signInREST(signIn);
    if (result.hasOwnProperty('token')) {
      history.push('/')
    } else if (result.hasOwnProperty('error')) {
        setError(result.error);
    } else {
        setError(true); 
    }
  }

  const signInState = (event: React.FormEvent<HTMLFormElement>) => {
    const target = event.target as HTMLInputElement;
    const name = target.name;
    const value = target.value;

    let signInCopy = {...signIn};

    switch(name) {
      case 'email':
        signInCopy.email = value;     //Because it's a number...
        break;
      case 'password':
        signInCopy.password = value;
        break;
      default:
        return
    }
    setSignInState(signInCopy);
  }

  const clearError = () => {
    setError(false);
  }

  if (loginError) {
    return (
      <LoginError
        clearError={clearError}
      />
    )
  }

  return (
    <div className="login-container">

      <div className="login-banner">
        <img className="login-trademon-logo" src={'/assets/trademon-logo.png'} alt="Trademon Logo"/>
        <h1>Trademon.io</h1>
      </div>
      
      <div className="panel-container">

        <div className="form-container sign-up-container">
          <form onSubmit={createUser} onChange={createState}>
            <h1>create account</h1>
            <div className="login-inputs">
              <input name="username" type="text" placeholder="Name" />
              <input name="email" type="email" placeholder="email" />
              <input name="password" type="password" placeholder="Password" />
            </div>
            <button>sign up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form onSubmit={signInUser} onChange={signInState}>
            <h1>sign in</h1>
            <div className="login-inputs">
              <input name="email" type="email" placeholder="email" />
              <input name="password" type="password" placeholder="Password" />
            </div>
            <button>sign in</button>
          </form>
        </div>

      <div className="overlay-panel"></div>

      <div className="overlay-create">
        <h2>Not a member?</h2>
        <i className="fas fa-user-plus fa-3x"></i>
        <button onClick={panelRight}>SIGN UP!</button>
      </div>

      
      <div className="overlay-member">
        <h2>Already a member?</h2>
        <i className="fas fa-sign-in-alt fa-3x"></i>
        <button onClick={panelLeft}>SIGN IN!</button>
      </div>

  </div>

  </div>
  )
  
}

export default withRouter(Login);