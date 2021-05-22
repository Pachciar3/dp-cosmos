import React from 'react';

import './styles.scss';

function Backdrop({ handleClose }) {
  return (
    <div className="backdrop" onClick={handleClose}></div>
  );
}

export default Backdrop;
