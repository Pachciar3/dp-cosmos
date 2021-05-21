import React from 'react';

import Link from '../Link';
import './styles.scss';

function Links() {
  return (
    <div className="links">
      <Link requestPath="capsules" columns={[{ value: "type", name: "Type" }, { value: "status", name: "Status", }]} image="http://localhost:3000/images/capsules.png" imageAlt="Capsules">Capsules</Link>
      <Link requestPath="crew" columns={[{ value: "name", name: "Name" }, { value: "status", name: "Status" }]} image="http://localhost:3000/images/crew.png" imageAlt="Crew">Crew</Link>
      <Link requestPath="rockets" columns={[{ value: "name", name: "Name" }, { value: "boosters", name: "Boosters" }]} image="http://localhost:3000/images/rockets.png" imageAlt="Rockets">Rockets</Link>
      <Link requestPath="starlink" columns={[{ value: "id", name: "ID" }, { value: "version", name: "Version" }]} image="http://localhost:3000/images/starlinks.png" imageAlt="Starlinks">Starlinks</Link>
    </div>
  );
}

export default Links;
