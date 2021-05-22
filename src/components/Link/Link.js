import React, { useState } from 'react';

import ModalDetails from '../ModalDetails/ModalDetails';
import './styles.scss';

function Link({ children, image, imageAlt, columns, requestPath }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  function handleOpenDialog() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }
  return (
    <>
      <button className="link" onClick={handleOpenDialog}>
        <img className="link__image" src={image} alt={imageAlt} />
        <span className="link__text">{children}</span>
        <div className="link__details"><span>Details</span></div>
        <div className="link__gradient"></div>
      </button>
      <ModalDetails
        columns={columns}
        requestPath={requestPath}
        title={children}
        open={dialogOpen}
        handleClose={handleCloseDialog} />
    </>
  );
}

export default Link;
