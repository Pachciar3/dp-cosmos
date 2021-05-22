import React from 'react';

import ModalHeader from './ModalHeader';
import Backdrop from '../Backdrop/Backdrop';
import Table from '../Table/Table';
import './styles.scss';

function ModalDetails({ open, handleClose, title, columns, requestPath }) {
  return (
    open && (
      <div role="dialog">
        <Backdrop handleClose={handleClose} />
        <div className="modal-details">
          <ModalHeader handleClose={handleClose} title={title} />
          <Table columns={columns} requestPath={requestPath} />
        </div>
      </div>
    )
  );
}

export default ModalDetails;
