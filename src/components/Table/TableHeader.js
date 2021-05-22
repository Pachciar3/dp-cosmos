import React, { useState } from "react";

import TableHeadButton from './TableHeadButton';
import TableLine from './TableLine';

function TableHeader({ columns, setData, data }) {
  const SORT_TYPES = { [columns[0].value]: "none", [columns[1].value]: "none" };
  const [sortTypes, setSortTypes] = useState(SORT_TYPES);
  function handleSortButtonClick(name) {
    const type = sortTypes[name];
    if (type === "DESC" || type === "none") {
      const dataToSort = [...data];
      dataToSort.sort((a, b) => {
        let fa = a[name].toString().toLowerCase(),
          fb = b[name].toString().toLowerCase();

        if (fa < fb) {
          return -1;
        }
        if (fa > fb) {
          return 1;
        }
        return 0;
      });
      setData(dataToSort);
      setSortTypes({ ...SORT_TYPES, [name]: "ASC" });
    } else if (type === "ASC") {
      const dataToSort = [...data];
      dataToSort.sort((a, b) => {
        let fa = a[name].toString().toLowerCase(),
          fb = b[name].toString().toLowerCase();

        if (fa < fb) {
          return 1;
        }
        if (fa > fb) {
          return -1;
        }
        return 0;
      });
      setData(dataToSort);
      setSortTypes({ ...SORT_TYPES, [name]: "DESC" });
    }
  }
  return (
    <thead>
      <TableLine head>
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

export default TableHeader;