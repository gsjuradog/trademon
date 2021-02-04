import React from 'react';
import { createPortal } from 'react-dom';

import '../../styling/modal.scss';
import Drawer from './drawer';

const Backdrop = ({toggleHamburger, handleMouseEnter, handleMouseLeave}) => {

  return createPortal (
    <div className="backdrop-container">
      <Drawer
        toggleHamburger={toggleHamburger}
        handleMouseEnter={handleMouseEnter}
        handleMouseLeave={handleMouseLeave}
      />
    </div>, document.getElementById('drawer-hook')
  );
}

export default Backdrop;