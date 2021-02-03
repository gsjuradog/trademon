import React from 'react';
import { gsap } from 'gsap';
import '../../styling/login.scss';


const Login = () => {

  const panelRight = () => {
    gsap.to('.overlay-panel', 0.6, {
      xPercent: 100,
      ease: "back.inOut(1.7)"
    })
    gsap.to('.overlay-create', 0.8, {
      opacity: 0,
      y: -100,
      ease: "elastic.out(1, 0.8)"
    })
    gsap.to('.overlay-member', 0.8, {
      delay: 0.6,
      opacity: 1,
      y: 0
    })
  }

  const panelLeft = () => {
    gsap.to('.overlay-panel', 0.6, {
      xPercent: 0,
      ease: "back.inOut(1.7)"
    })
    gsap.to('.overlay-create', 0.8, {
      delay: 0.6,
      opacity: 1,
      y: 0
    })
    gsap.to('.overlay-member', 0.8, {
      opacity: 0,
      y: -100,
      ease: "elastic.out(1, 0.8)"
    })
  }

  return (
    <div className="login-container">

      <div className="login-banner">
        <img className="login-trademon-logo" src={'/assets/trademon-logo.png'} alt="Trademon Logo"/>
        <h1>Trademon.io</h1>
      </div>
      
      <div className="panel-container">

        <div className="form-container sign-up-container">
          <form action="#">
            <h1>create account</h1>
            <div className="login-inputs">
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="email" />
              <input type="password" placeholder="Password" />
            </div>
            <button>sign up</button>
          </form>
        </div>

        <div className="form-container sign-in-container">
          <form action="#">
            <h1>sign in</h1>
            <div className="login-inputs">
              <input type="email" placeholder="email" />
              <input type="password" placeholder="Password" />
            </div>
            <button>sign in</button>
          </form>
        </div>

      <div className="overlay-panel">
      </div>

      <div className="overlay-create">
        <h2>Not a member?</h2>
        <button onClick={panelRight}>SIGN UP!</button>
      </div>

      
      <div className="overlay-member">
        <h2>Already a member?</h2>
        <button onClick={panelLeft}>SIGN IN!</button>
      </div>

  </div>
</div>
  )
  
}

export default Login;

/* <div className="overlay-container">
  
  <div className="overlay-panel overlay-left">
    <h1>already a member?</h1>
    <p>sign in to trade!</p>
    <button className="ghost" id="signIn">sign In</button>
  </div>
  
  <div className="overlay-panel overlay-right">
    <h1>hello friend!</h1>
    <p>not a member? sign up!</p>
    <button className="ghost" id="signUp">sign up</button>
  </div>
  
  </div> */