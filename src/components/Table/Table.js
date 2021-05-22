import React, { useState, useEffect } from 'react';
import { connect } from "react-redux";
import { fetchRequested } from "./redux";

import TableStructure from "./TableStructure";

function Table({ fetchRequested, objects, columns, requestPath, isLoading, isError }) {
  const [data, setData] = useState(objects[requestPath]);

  useEffect(() => {
    if (!objects[requestPath].length) {
      fetchRequested(requestPath);
    } else {
      setData(objects[requestPath]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [objects[requestPath]]);

  return (
    <TableStructure
      data={data}
      setData={setData}
      columns={columns}
      isLoading={isLoading}
      isError={isError}
    />
  );
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
