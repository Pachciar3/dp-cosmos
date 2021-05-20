import React from 'react';

import Links from '../../components/Links';
import Rocket from '../../components/Rocket';
import './styles.scss';

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <Links />
        <Rocket />
      </div>
    </main>
  );
}

export default Main;
