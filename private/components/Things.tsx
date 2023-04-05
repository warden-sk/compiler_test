import React from 'react';
import context from '../helpers/context';
import useDraggable from '../helpers/useDraggable';
import Thing from './Thing';

function Things() {
  const draggable = useDraggable();
  const { things } = React.useContext(context);

  return (
    <div spaceY="2">
      {things.map((thing, i) => (
        <Thing {...draggable} i={i} key={thing.key} thing={thing} />
      ))}
    </div>
  );
}

export default Things;
