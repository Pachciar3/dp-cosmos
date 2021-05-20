import React, { useState } from 'react';

import Link from '../Link';
import ModalDetails from '../ModalDetails'
import './styles.scss';

function Links() {
  const [dialogOpen, setDialogOpen] = useState(false);

  function handleOpenDialog() {
    setDialogOpen(true);
  }

  function handleCloseDialog() {
    setDialogOpen(false);
  }

  return (
    <div className="links">
      <Link handleClick={handleOpenDialog} image="http://localhost:3000/images/capsules.png" imageAlt="Capsules">Capsules</Link>
      <Link handleClick={handleOpenDialog} image="http://localhost:3000/images/crew.png" imageAlt="Crew">Crew</Link>
      <Link handleClick={handleOpenDialog} image="http://localhost:3000/images/rockets.png" imageAlt="Rockets">Rockets</Link>
      <Link handleClick={handleOpenDialog} image="http://localhost:3000/images/starlinks.png" imageAlt="Starlinks">Starlinks</Link>
      <ModalDetails title="Starlink" open={dialogOpen} handleClose={handleCloseDialog} />
    </div>
  );
}

export default Links;
