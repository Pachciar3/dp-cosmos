import React, { useState } from 'react';

import PlanetStructure from "./PlanetStructure";

function Planet() {
  const [start, setStart] = useState(false);

  function handleRocketStarting() {
    if (!start) {
      setStart(true);
      setTimeout(() => { setStart(false); }, 10000);
    }
  }

  return (
    <PlanetStructure handleRocketStarting={handleRocketStarting} start={start} />
  );
}

export default Planet;
