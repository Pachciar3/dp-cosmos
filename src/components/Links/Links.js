import React from 'react';

import Link from '../Link/Link';
import './styles.scss';

const APP_URL = process.env.REACT_APP_URL;

function Links() {
  return (
    <div className="links">
      <Link
        requestPath="capsules"
        columns={[{ value: "type", name: "Type" }, { value: "status", name: "Status", }]}
        image={`${APP_URL}/images/capsules.png`}
        imageAlt="Capsules">
        Capsules
      </Link>
      <Link
        requestPath="crew"
        columns={[{ value: "name", name: "Name" }, { value: "status", name: "Status" }]}
        image={`${APP_URL}/images/crew.png`}
        imageAlt="Crew">
        Crew
      </Link>
      <Link
        requestPath="rockets"
        columns={[{ value: "name", name: "Name" }, { value: "boosters", name: "Boosters" }]}
        image={`${APP_URL}/images/rockets.png`} imageAlt="Rockets">
        Rockets
      </Link>
      <Link
        requestPath="starlink"
        columns={[{ value: "id", name: "ID" }, { value: "version", name: "Version" }]}
        image={`${APP_URL}/images/starlinks.png`}
        imageAlt="Starlinks">
        Starlinks
      </Link>
    </div>
  );
}

export default Links;
