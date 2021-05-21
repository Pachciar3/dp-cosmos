import React from 'react';

import TwoArrowsIcon from '../../assets/TwoArrows';
import DownArrowIcon from '../../assets/DownArrow';
import UpArrowIcon from '../../assets/UpArrow';

function TableHeadButton({ children, handleClick, type }) {
  function iconType() {
    if (type === "DESC") {
      return <DownArrowIcon color="#a094c6" />
    } else if (type === "ASC") {
      return <UpArrowIcon color="#a094c6" />
    } else {
      return <TwoArrowsIcon color="#a094c6" />
    }
  }
  return (
    <th className="table__head">
      <button onClick={handleClick} className="table__head-button">
        <span>{children}</span>
        <span className="table__head-button__icon">
          {iconType()}
        </span>
      </button>
    </th>
  )
}

export default TableHeadButton;