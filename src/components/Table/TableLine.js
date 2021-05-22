import React from 'react';

function TableLine({ children, center }) {
  const className = `table__line ${center ? "table__line--center" : "table__line"}`
  return (
    <tr className={className}>{children}</tr>
  )
}

export default TableLine;