import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { fetchRequested } from "./redux";

import TableLine from './TableLine';
import TableCell from './TableCell';
import TableList from './TableList';
import TableHeader from './TableHeader';
import Loader from "../Loader";
import './styles.scss';

function Table({ fetchRequested, objects, columns, requestPath, isLoading, isError }) {
  const [data, setData] = useState(objects[requestPath]);

  useEffect(() => {
    if (!objects[requestPath].length) {
      fetchRequested(requestPath);
    } else {
      setData(objects[requestPath])
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objects[requestPath]])

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
  )
}

const mapDispatchToProps = dispatch => ({
  fetchRequested: (type) => dispatch(fetchRequested(type))
});

const mapStateToProps = state => ({
  objects: state.flyingObjectsReducer.objects,
  isLoading: state.flyingObjectsReducer.isLoading,
  isError: state.flyingObjectsReducer.isError
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Table);
