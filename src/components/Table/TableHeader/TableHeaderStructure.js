import React from "react";

import TableHeadButton from './TableHeadButton';
import TableLine from '../TableLine';

function TableHeaderStructure({ columns, handleSortButtonClick, sortTypes }) {
  return (
    <thead>
      <TableLine>
        <TableHeadButton
          type={sortTypes[columns[0].value]}
          handleClick={() => handleSortButtonClick(columns[0].value)}>
          {columns[0].name}
        </TableHeadButton>
        <TableHeadButton
          type={sortTypes[columns[1].value]}
          handleClick={() => handleSortButtonClick(columns[1].value)}>
          {columns[1].name}
        </TableHeadButton>
      </TableLine>
    </thead>
  );
}

export default TableHeaderStructure;