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
      <div spaceY="2">
        {filteredThings.map(thing => (
          <Thing {...draggable} key={thing.key} thing={thing} />
        ))}
      </div>
    );
  }
}

export default Things;
