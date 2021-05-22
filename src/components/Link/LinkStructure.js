import React from 'react';

import './styles.scss';

function Link({ children, image, imageAlt, handleOpenDialog }) {
  return (
    <button className="link" onClick={handleOpenDialog}>
      <img className="link__image" src={image} alt={imageAlt} />
      <span className="link__text">{children}</span>
      <div className="link__details"><span>Details</span></div>
      <div className="link__gradient"></div>
    </button>
  );
}

export default Link;
