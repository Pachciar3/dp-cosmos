import React from 'react';

import TableHeadButton from './TableHeadButton';
import TableLine from './TableLine';
import TableCell from './TableCell';
import './styles.scss';

function Table() {
  return (
    <div>
      <table className="table">
        <thead>
          <TableLine>
            <TableHeadButton>Type</TableHeadButton>
            <TableHeadButton>Status</TableHeadButton>
          </TableLine>
        </thead>
        <tbody>
          <div className="table__lines">
            <TableLine>
              <TableCell>Dragon 5.0</TableCell>
              <TableCell>retired</TableCell>
            </TableLine>
            <TableLine>
              <TableCell>Dragon 5.1</TableCell>
              <TableCell>retired</TableCell>
            </TableLine>
            <TableLine>
              <TableCell>Dragon 5.2</TableCell>
              <TableCell>retired</TableCell>
            </TableLine>
            <TableLine>
              <TableCell>Dragon 5.3</TableCell>
              <TableCell>retired</TableCell>
            </TableLine>
            <TableLine>
              <TableCell>Dragon 5.4</TableCell>
              <TableCell>retired</TableCell>
            </TableLine>
            <TableLine>
              <TableCell>Dragon 5.5</TableCell>
              <TableCell>retired</TableCell>
            </TableLine>
            <TableLine>
              <TableCell>Dragon 1.0</TableCell>
              <TableCell>retired</TableCell>
            </TableLine>
            <TableLine>
              <TableCell>Dragon 1.0</TableCell>
              <TableCell>retired</TableCell>
            </TableLine>
          </div>
          <div className="table__gradient"></div>
        </tbody>
      </table>

    </div>
  )
}

export default Table;