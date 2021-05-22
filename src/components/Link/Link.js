import React, { useState } from 'react';

import ModalDetails from '../ModalDetails/ModalDetails';
import LinkStructure from './LinkStructure';

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
      <LinkStructure
        handleOpenDialog={handleOpenDialog}
        children={children}
        image={image}
        imageAlt={imageAlt}
      />
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
