import React, { useEffect } from 'react';

import { withRouter, useHistory } from 'react-router-dom';

import { demoHeadAnimation, demoArrowAnimation } from '../../utils/animations';

import '../../styling/demo.scss';

const DemoAnimation = () => {

  const history = useHistory();

  useEffect(() => {
    document.querySelector('.container-demo')!.addEventListener('click', ()=>{
      demoHeadAnimation();
      demoArrowAnimation();
    })
  }, []);
  
  const toDemo = () => {
    history.push('/login');
  }

  return (
    <div className="container-demo">
      <div className="demo-content">

        <h1>trademon.io</h1>

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