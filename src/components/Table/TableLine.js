import React from 'react';

function TableLine({ children, center, head }) {
  const classNameCenter = `table__line ${center ? "table__line--center" : ""}`;
  const classNameHead = `${classNameCenter} ${head ? "table__line--head" : ""}`;
  return (
    <tr className={classNameHead}>{children}</tr>
  );
}

export default React.memo(TableLine);