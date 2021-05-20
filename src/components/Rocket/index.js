import React from 'react';

import Button from "../Button";
// import { Link as LinkTo } from 'react-router-dom';

import './styles.scss';

function Rocket() {
  return (
    <div className="rocket">
      <div className="rocket__planet"><img src="http://localhost:3000/images/planet.png" alt="Planet" /></div>
      <div className="rocket__action"><Button>Launch Rocket!</Button></div>
    </div>
  );
}

export default Rocket;
