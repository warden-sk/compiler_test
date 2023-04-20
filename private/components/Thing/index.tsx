/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type { ThingInput } from '../../types';
import DeleteButton from './DeleteButton';
import MoveDownButton from './MoveDownButton';
import MoveUpButton from './MoveUpButton';

function Thing({ onDragEnd, onDragOver, onDragStart, thing }: ThingInput) {
  const onUpdate = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const updatedKey = e.currentTarget.value;

      if (updatedKey.length) {
        thing.update(updatedKey);
      } else {
        e.currentTarget.value = thing.key;
      }
    }
  }, []);

  return (
    <div
      alignItems="center"
      className={{ done: thing.isDone }}
      display="flex"
      draggable
      onDragEnd={e => onDragEnd(e, thing.i)}
      onDragOver={e => onDragOver(e, thing.i)}
      onDragStart={e => onDragStart(e, thing.i)}
      spaceX="4"
    >
      {/* (1/3) */}
      <div
        border="2"
        borderRadius="2"
        cursor="pointer"
        lineHeight="1"
        onClick={() => thing.done()}
        opacity={!thing.isDone && '50'}
        p="2"
      >
        {'\u2713'}
      </div>
      {/* (2/3) */}
      <div width="100">
        <input border="0" defaultValue={thing.key} fontSize="5" onKeyDown={e => onUpdate(e)} type="text" width="100" />
        <div fontSize="1" opacity="50">
          Created at {thing.createdAt.toLocaleString()}
        </div>
      </div>
      {/* (3/3) */}
      <div display="flex" fontSize="5" opacity="50" spaceX="2">
        <DeleteButton thing={thing} />
        <MoveDownButton thing={thing} />
        <MoveUpButton thing={thing} />
      </div>
    </div>
  );
}

export default Thing;
