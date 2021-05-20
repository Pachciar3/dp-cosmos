import React from 'react';

import ModalHeader from './ModalHeader';
import Backdrop from '../Backdrop';
import Table from '../Table';
import './styles.scss';

function ModalDetails({ open, handleClose, title }) {
  return (
    open && (
      <>
        <Backdrop handleClose={handleClose} />
        <div className="modal-details">
          <ModalHeader handleClose={handleClose} title={title} />
          <Table />
        </div>
      </>
    )
  );
}

export default ModalDetails;
