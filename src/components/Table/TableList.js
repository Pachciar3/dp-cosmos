import React from "react";

import TableLine from './TableLine';
import TableCell from './TableCell';

function TableList({ data, columns }) {
  if (data) {
    return data.map(object => (
      <TableLine key={object.id}>
        <TableCell>{object[columns[0].value]}</TableCell>
        <TableCell>{object[columns[1].value]}</TableCell>
      </TableLine>
    )
    );
  } else {
    return null;
  }
}

export default TableList;