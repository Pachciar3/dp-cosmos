import React from 'react';
// import { Link as LinkTo } from 'react-router-dom';

import './styles.scss';

function Link({ children, image, imageAlt, handleClick }) {
  return (
    <button className="link" onClick={handleClick}>
      <img className="link__image" src={image} alt={imageAlt} />
      <span className="link__text">{children}</span>
      <div className="link__details"><span>Details</span></div>
      <div className="link__gradient"></div>
    </button>
  );
}

export default Link;
