import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { fetchRequested } from "./redux";

import TableHeadButton from './TableHeadButton';
import TableLine from './TableLine';
import TableCell from './TableCell';
import './styles.scss';



function Table({ fetchRequested, objects, columns, requestPath, isLoading, isError }) {
  const SORT_TYPES = { [columns[0].value]: "none", [columns[1].value]: "none" }

  const [data, setData] = useState(objects[requestPath]);
  const [sortTypes, setSortTypes] = useState(SORT_TYPES);
  useEffect(() => {
    if (!objects[requestPath].length) {
      fetchRequested(requestPath);
    } else {
      setData(objects[requestPath])
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objects])
  function renderList() {
    if (data) {
      return data.map(object => (
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
    const type = sortTypes[name];
    if (type === "DESC" || type === "none") {
      const dataToSort = [...data]
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
      })
      setData(dataToSort);
      setSortTypes({ ...SORT_TYPES, [name]: "ASC" });
    } else if (type === "ASC") {
      const dataToSort = [...data]
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
      })
      setData(dataToSort);
      setSortTypes({ ...SORT_TYPES, [name]: "DESC" });
    }

  }
  return (
    <div>
      <table className="table">
        <thead>
          <TableLine>
            <TableHeadButton type={sortTypes[columns[0].value]} handleClick={() => handleSortButtonClick(columns[0].value)}>{columns[0].name}</TableHeadButton>
            <TableHeadButton type={sortTypes[columns[1].value]} handleClick={() => handleSortButtonClick(columns[1].value)}>{columns[1].name}</TableHeadButton>
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
