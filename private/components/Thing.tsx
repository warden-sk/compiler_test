/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../helpers/context';
import type { ThingInput } from '../types';

function Thing({ onDragEnd, onDragOver, onDragStart, thing }: ThingInput) {
  const { things } = React.useContext(context);

  const onUpdate = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const key = e.currentTarget.value.replace(/^\s+|\s+$/g, '');

      if (key.length) {
        thing.update(key);
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
      <div width="100">
        <input border="0" defaultValue={thing.key} fontSize="5" onKeyDown={e => onUpdate(e)} type="text" width="100" />
        <div fontSize="1" opacity="50">
          Created at {thing.createdAt.toLocaleString()}
        </div>
      </div>
      <div display="flex" fontSize="5" opacity="50" spaceX="2">
        <div cursor="pointer" onClick={() => thing.moveUp()} opacity={thing.isFirst && '50'}>{`\u2191`}</div>
        <div cursor="pointer" onClick={() => thing.moveDown()} opacity={thing.isLast && '50'}>{`\u2193`}</div>
        <div cursor="pointer" onClick={() => thing.delete()}>
          {'\u2717'}
        </div>
      </div>
    </div>
  );
}

export default Thing;
