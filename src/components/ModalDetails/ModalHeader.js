import React from 'react';

import CloseIcon from '../../assets/Close';
import './styles.scss';

function ModalHeader({ handleClose, title }) {
  return (
    <header className="modal-details__header">
      <h3 className="modal-details__title">{title}</h3><button className="modal-details__close" onClick={handleClose}><CloseIcon color="#C3B8E8" /></button>
    </header>);
}

export default ModalHeader;
