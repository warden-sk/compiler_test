/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';
import Thing from '../Thing';

function Things() {
  const { things } = React.useContext(helpers.context);

  const draggable = helpers.useDraggable();

  if (things.length) {
    return (
      <div spaceY="4">
        {[...things].map(thing => (
          <Thing {...draggable} key={thing.key} thing={thing} />
        ))}
      </div>
    );
  }

  return <div>No things are available.</div>;
}

export default Things;
