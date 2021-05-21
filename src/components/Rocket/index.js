import React from 'react';

import './styles.scss';

function Rocket({ start }) {
  const rocketClassName = `rocket ${start ? "start-animation" : ""}`
  return (
    <div className={rocketClassName}>
      <div className="rocket__image"><img src="http://localhost:3000/images/rocket.png" alt="Rocket" /><img className="rocket__landing" src="http://localhost:3000/images/landing_gear.png" alt="Landing Gear" /></div>
      <img className="rocket__smoke-right" src="http://localhost:3000/images/Smoke_1.png" alt="Smoke" />
      <img className="rocket__smoke-left" src="http://localhost:3000/images/Smoke_2.png" alt="Smoke" />
    </div>
  );
}

export default Rocket;
