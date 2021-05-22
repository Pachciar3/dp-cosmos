import React from 'react';

import TwoArrowsIcon from '../../icons/TwoArrows';
import DownArrowIcon from '../../icons/DownArrow';
import UpArrowIcon from '../../icons/UpArrow';

function TableHeadButton({ children, handleClick, type }) {
  function iconType() {
    if (type === "DESC") {
      return <DownArrowIcon color="#a094c6" />;
    } else if (type === "ASC") {
      return <UpArrowIcon color="#a094c6" />;
    } else {
      return <TwoArrowsIcon color="#a094c6" />;
    }
  }
  const iconClassName = `table__head-button__icon
  ${type === "none" ? "" : "table__head-button__icon--view"}`;
  return (
    <th className="table__head">
      <button onClick={handleClick} className="table__head-button">
        <span>{children}</span>
        <span className={iconClassName}>
          {iconType()}
        </span>
      </button>
    </th>
  );
}

export default TableHeadButton;