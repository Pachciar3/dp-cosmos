import React from 'react';

import TwoArrowsIcon from '../../assets/TwoArrows';

function TableHeadButton({ children }) {
  return (
    <th className="table__head"><button className="table__head-button"><span>{children}</span><span className="table__head-button__icon"><TwoArrowsIcon color="#a094c6" /></span></button></th>
  )
}

export default TableHeadButton;