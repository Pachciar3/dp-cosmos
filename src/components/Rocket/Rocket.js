import React from 'react';

import './styles.scss';

const APP_URL = process.env.REACT_APP_URL;

function Rocket({ start }) {
  const rocketClassName = `rocket ${start ? "start-animation" : ""}`;
  return (
    <div className={rocketClassName}>
      <div className="rocket__image">
        <img src={`${APP_URL}/images/Rocket.png`}
          alt="Rocket" />
        <img className="rocket__landing" src={`${APP_URL}/images/landing_gear.png`}
          alt="Landing Gear" />
      </div>
      <img className="rocket__smoke-right" src={`${APP_URL}/images/Smoke_1.png`} alt="Smoke" />
      <img className="rocket__smoke-left" src={`${APP_URL}/images/Smoke_2.png`} alt="Smoke" />
    </div>
  );
}

export default Rocket;
