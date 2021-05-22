import React, { useState } from 'react';

import Button from "../Button/Button";
import Rocket from "../Rocket/Rocket";
import './styles.scss';

const APP_URL = process.env.REACT_APP_URL;

function Planet() {
  const [start, setStart] = useState(false);

  function handlePlanetStarting() {
    if (!start) {
      setStart(true);
      setTimeout(() => { setStart(false); }, 10000);
    }
  }

  return (
    <div className="planet">
      <div className="planet__container">
        <div className="planet__image">
          <img src={`${APP_URL}/images/planet.png`} alt="Planet" />
        </div>
        <Rocket start={start} />
      </div>
      <div className="planet__action">
        <Button disabled={start} handleClick={handlePlanetStarting}>Launch Rocket!</Button>
      </div>
    </div>
  );
}

export default Planet;
