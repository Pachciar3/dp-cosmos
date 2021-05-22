import React, { useState } from "react";

import { sortASC, sortDESC } from "../../../utils/sort";
import TableHeaderStructure from './TableHeaderStructure';

function TableHeader({ columns, setData, data }) {
  const SORT_TYPES = { [columns[0].value]: "none", [columns[1].value]: "none" };
  const [sortTypes, setSortTypes] = useState(SORT_TYPES);
  function handleSortButtonClick(name) {
    const type = sortTypes[name];
    const dataToSort = [...data];
    if (type === "DESC" || type === "none") {
      dataToSort.sort((a, b) => sortASC(a[name], b[name]));
      setData(dataToSort);
      setSortTypes({ ...SORT_TYPES, [name]: "ASC" });
    } else if (type === "ASC") {
      dataToSort.sort((a, b) => sortDESC(a[name], b[name]));
      setData(dataToSort);
      setSortTypes({ ...SORT_TYPES, [name]: "DESC" });
    }
  }
  return (
    <TableHeaderStructure
      columns={columns}
      handleSortButtonClick={handleSortButtonClick}
      sortTypes={sortTypes}
    />
  );
}

export default TableHeader;