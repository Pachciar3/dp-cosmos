import React, { useState } from 'react';

import Button from "../Button";
import Rocket from "../Rocket";

import './styles.scss';

function Planet() {
  const [start, setStart] = useState(false);

  function handlePlanetStarting() {
    if (!start) {
      setStart(true)
      setTimeout(() => { setStart(false) }, 10000)
    }
  }

  return (
    <div className="planet">
      <div className="planet__container">
        <div className="planet__image"><img src="http://localhost:3000/images/planet.png" alt="Planet" /></div>
        <Rocket start={start} />
      </div>
      <div className="planet__action"><Button disabled={start} handleClick={handlePlanetStarting}>Launch Rocket!</Button></div>
    </div>
  );
}

export default Planet;
