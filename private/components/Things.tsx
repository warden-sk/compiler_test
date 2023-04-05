import React from 'react';
import useDraggable from '../helpers/useDraggable';
import useFilteredThings from '../helpers/useFilteredThings';
import Thing from './Thing';

function Things() {
  const draggable = useDraggable();
  const filteredThings = useFilteredThings();

  if (filteredThings.length) {
    return (
      <div spaceY="4">
        <div fontSize="8">Things</div>
        <div spaceY="2">
          {filteredThings.map((thing, i) => (
            <Thing {...draggable} i={i} key={thing.key} thing={thing} />
          ))}
        </div>
      </div>
    );
  }
}

export default Things;
