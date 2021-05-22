import React from "react";

import './styles.scss';

function Loader() {
  return (
    <div className="lds-loader" aria-label="loading..."><div></div><div></div><div></div></div>
  );
}

export default Loader;