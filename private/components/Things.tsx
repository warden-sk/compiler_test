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
      <div>
        {filteredThings.map(thing => (
          <Thing {...draggable} i={thing.i} key={thing.key} thing={thing} />
        ))}
      </div>
    );
  }
}

export default Things;
