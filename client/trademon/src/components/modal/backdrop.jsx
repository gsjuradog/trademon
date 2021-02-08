import React, {useEffect} from 'react';
import { createPortal } from 'react-dom';

import '../../styling/modal.scss';
import Drawer from './drawer';

const Backdrop = ({toggleHamburger}) => {

  useEffect(()=> {
    document.querySelector('.backdrop-event-listener').addEventListener('click', () => {
      toggleHamburger();
    })
  },[]);


  return createPortal (
    <div className="backdrop-container">
    <div className="backdrop-event-listener">
    </div>
      <Drawer
        toggleHamburger={toggleHamburger}
      />
    </div>, document.getElementById('drawer-hook')
  );
}

export default Backdrop;