import React from 'react';

import Links from '../../components/Links';
import Planet from '../Planet';
import './styles.scss';

function Main() {
  return (
    <main className="main">
      <div className="main__container">
        <Links />
        <Planet />
      </div>
    </main>
  );
}

export default Main;
