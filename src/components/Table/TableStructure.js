import React from 'react';

import TableLine from './TableLine';
import TableCell from './TableCell';
import TableList from './TableList';
import TableHeader from './TableHeader/TableHeader';
import Loader from "../Loader/Loader";
import './styles.scss';

function TableStructure({ data, setData, columns, isLoading, isError }) {
  return (
    <div className="table">
      <table className="table__table-con">
        <TableHeader columns={columns} setData={setData} data={data} />
        <tbody className="table__content">
          <TableList data={data} columns={columns} />
          <TableLine center>
            <TableCell colSpan="2">
              {isLoading && <Loader />}
              {isError && "Sorry we have a problem"}
            </TableCell>
          </TableLine>
        </tbody>
      </table>
      <div className="table__gradient"></div>
    </div>
  );
}

export default TableStructure;
