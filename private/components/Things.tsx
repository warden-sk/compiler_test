/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../helpers';
import Thing from './Thing';

function Things() {
  const draggable = h.useDraggable();
  const filteredThings = h.useFilteredThings();

  if (filteredThings.length) {
    return (
      <div spaceY="4">
        {filteredThings.map(thing => (
          <Thing {...draggable} key={thing.key} thing={thing} />
        ))}
      </div>
    );
  }

  return <div>No things are available.</div>;
}

export default Things;
