import { withRouter, useHistory } from 'react-router-dom';

import { demoHeadAnimation, demoArrowAnimation } from '../../utils/animations';

import '../../styling/demo.scss';
import React from 'react';

const DemoAnimation = () => {

  const history = useHistory();

  const startAnimation = () => {
    demoHeadAnimation();
    demoArrowAnimation();
  }

  const toDemo = () => {
    history.push('/login');
  }

  return (
    <div className="container-demo">
      <button className="demo-start" onClick={startAnimation}>START DEMO</button>
      <div className="demo-content">

        <h1>Trademon.io</h1>

        <img className="demo-img-head" src={'/assets/head-t.png'} alt=''></img>
        <img className="demo-img-arrows" src={'/assets/arrows-t.png'} alt=''></img>

        <div className="demo-redirect">
          <p>Dalton | Wilfredo | Santiago not Gabriel | Adrian | Wlad | Dan</p>
          <button onClick={toDemo}>TO TRADEMON.IO</button>
        </div>

      </div>

    </div>
  )
}

export default withRouter(DemoAnimation);