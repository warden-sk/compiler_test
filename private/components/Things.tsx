/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import useDraggable from '../helpers/useDraggable';
import useFilteredThings from '../helpers/useFilteredThings';
import Thing from './Thing';

function Things() {
  const draggable = useDraggable();
  const filteredThings = useFilteredThings();

  if (filteredThings.length) {
    return (
      // move "height" elsewhere
      <div height="100" spaceY="4" style={{ overflowY: 'auto' }}>
        <div fontSize="8" fontWeight="600">
          Things
        </div>
        <div spaceY="2">
          {filteredThings.map(thing => (
            <Thing {...draggable} i={thing.i} key={thing.key} thing={thing} />
          ))}
        </div>
      </div>
    );
  }
}

export default Things;
