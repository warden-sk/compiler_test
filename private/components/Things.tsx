import React from 'react';
import context from '../helpers/context';
import useDraggable from '../helpers/useDraggable';
import Thing from './Thing';

function Things({ list }: { list: string }) {
  const draggable = useDraggable();
  const { things } = React.useContext(context);

  let filteredThings = [...things];

  if (list === 'Done') {
    filteredThings = filteredThings.filter(thing => thing.isDone);
  }

  if (list === 'Not done') {
    filteredThings = filteredThings.filter(thing => !thing.isDone);
  }

  return (
    <div spaceY="2">
      {filteredThings.map((thing, i) => (
        <Thing {...draggable} i={i} key={thing.key} thing={thing} />
      ))}
    </div>
  );
}

export default Things;
