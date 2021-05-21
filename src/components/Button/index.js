import React from 'react';

import './styles.scss';

function Button({ children, handleClick, disabled }) {
  const className = `button ${disabled ? "disabled" : ""}`
  return (
    <button disabled={disabled} className={className} onClick={handleClick}>
      {children}
    </button>
  );
}

export default Button;
