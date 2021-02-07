import React from 'react';
import { createPortal } from 'react-dom';

import '../../styling/modal.scss';
import Drawer from './drawer';

const Backdrop = ({toggleHamburger}) => {

  return createPortal (
    <div className="backdrop-container">
      <Drawer
        toggleHamburger={toggleHamburger}
      />
    </div>, document.getElementById('drawer-hook')
  );
}

export default Backdrop;