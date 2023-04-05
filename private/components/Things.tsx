import React from 'react';
import context from '../helpers/context';
import useDraggable from '../helpers/useDraggable';
import Input from './Input';
import Thing from './Thing';

function Things() {
  const draggable = useDraggable();
  const { things } = React.useContext(context);

  return (
    <div className="container" mX="auto">
      <div p="4" spaceY="4">
        <Input />
        <div spaceY="2">
          {things.map((thing, i) => (
            <Thing {...draggable} i={i} key={thing.key} thing={thing} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Things;
