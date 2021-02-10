import React, { useEffect } from 'react';

import { withRouter, useHistory } from 'react-router-dom';

import { demoHeaderAnimation, demoHeadAnimation, demoArrowAnimation, demoRedirectAnimation } from '../../utils/animations';

import '../../styling/demo.scss';

const DemoAnimation = () => {

  const history = useHistory();

  useEffect(() => {
    document.querySelector('.container-demo')!.addEventListener('click', () => {
      demoHeaderAnimation();
      demoHeadAnimation();
      demoArrowAnimation();
      demoRedirectAnimation();
    })
  }, []);
  
  const toDemo = () => {
    history.push('/login');
  }

  return (
    <div className="container-demo">
      <div className="cover-watermark-box"></div>
      <div className="demo-content">

      <video className="my-vid" muted autoPlay loop>
        <source src={'/assets/lightning-trim.mp4'} type="video/mp4"/>
      </video>

        <h1 className="demo-main-header">trademon.io</h1>

        <img className="demo-img-head" src={'/assets/head-t.png'} alt=''></img>
        <img className="demo-img-arrows" src={'/assets/arrows-t.png'} alt=''></img>

        <div className="demo-redirect">
          <p>Dalton | Wilfredo | Santiago | Adrian | Wlad | Dan</p>
          <button onClick={toDemo}>TO TRADEMON.IO</button>
        </div>

      </div>

    </div>
  )
}

export default withRouter(DemoAnimation);