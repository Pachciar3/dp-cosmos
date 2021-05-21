import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { fetchRequested } from "./redux";

import TableHeadButton from './TableHeadButton';
import TableLine from './TableLine';
import TableCell from './TableCell';
import './styles.scss';

function Table({ fetchRequested, objects, columns, requestPath, isLoading, isError }) {
  useEffect(() => {
    if (!objects[requestPath].length) {
      fetchRequested(requestPath);
    }
  }, [])
  function renderList() {
    if (objects) {
      return objects[requestPath].map(object => (
        <TableLine key={object.id}>
          <TableCell>{object[columns[0].value]}</TableCell>
          <TableCell>{object[columns[1].value]}</TableCell>
        </TableLine>
      )
      );
    }
    return null
  }
  function handleSortButtonClick(name) {
    console.log(name);
  }
  return (
    <div>
      <table className="table">
        <thead>
          <TableLine>
            <TableHeadButton handleClick={() => handleSortButtonClick(columns[0].value)}>{columns[0].name}</TableHeadButton>
            <TableHeadButton handleClick={() => handleSortButtonClick(columns[1].value)}>{columns[1].name}</TableHeadButton>
          </TableLine>
        </thead>
        <tbody className="table__content">
          {renderList()}
          <TableLine>
            <TableCell colSpan="2">
              {isLoading && "Loading..."}
              {isError && "Error"}
            </TableCell>
          </TableLine>
        </tbody>
        <caption className="table__gradient"></caption>
      </table>
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
