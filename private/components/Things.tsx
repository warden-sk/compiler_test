import React from 'react';
import context from '../helpers/context';
import useDraggable from '../helpers/useDraggable';
import Thing from './Thing';

function Things() {
  const draggable = useDraggable();
  const { currentList, things } = React.useContext(context);

  let filteredThings = [...things];

  if (currentList === 'Done') {
    filteredThings = filteredThings.filter(thing => thing.isDone);
  }

  if (currentList === 'Not done') {
    filteredThings = filteredThings.filter(thing => !thing.isDone);
  }

  if (filteredThings.length) {
    return (
      <div spaceY="4">
        <div fontSize="8">{filteredThings.length} thing(s)</div>
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
