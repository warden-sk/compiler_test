/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../helpers/context';
import type { ThingInput } from '../types';

function Thing({ i, onDragEnd, onDragOver, onDragStart, thing }: ThingInput) {
  const { setThings, things } = React.useContext(context);

  function onDelete(e: React.MouseEvent<HTMLDivElement>, j: number) {
    setThings(things => {
      return things.filter((thing, k) => {
        return k !== j;
      });
    });
  }

  function onDone(e: React.MouseEvent<HTMLDivElement>, j: number) {
    setThings(things => {
      return things.map((thing, k) => {
        if (k === j) {
          return { ...thing, isDone: !thing.isDone };
        } else {
          return thing;
        }
      });
    });
  }

  function onUpdate(e: React.KeyboardEvent<HTMLInputElement>, j: number) {
    if (e.key === 'Enter') {
      const key = e.currentTarget.value.replace(/^\s+|\s+$/g, '');

      if (key.length) {
        setThings(things => {
          return things.map((thing, k) => {
            if (k === j) {
              return { ...thing, key };
            } else {
              return thing;
            }
          });
        });
      }
    }
  }

  return (
    <div
      alignItems="center"
      className={{ done: thing.isDone }}
      display="flex"
      draggable
      lineHeight="1"
      onDragEnd={e => onDragEnd(e, i)}
      onDragOver={e => onDragOver(e, i)}
      onDragStart={e => onDragStart(e, i)}
      spaceX="4"
    >
      <div display="flex" opacity="50" spaceX="2">
        <div cursor="pointer" opacity={i === 0 && '0'}>{`\u2191`}</div>
        <div cursor="pointer" opacity={i === things.length - 1 && '0'}>{`\u2193`}</div>
      </div>
      <div
        border="2"
        borderRadius="2"
        cursor="pointer"
        onClick={e => onDone(e, i)}
        opacity={!thing.isDone && '50'}
        p="2"
      >
        {'\u2713'}
      </div>
      <div width="100">
        <input
          border="0"
          defaultValue={thing.key}
          fontSize="4"
          onKeyDown={e => onUpdate(e, i)}
          p="2"
          type="text"
          width="100"
        />
        <div fontSize="2" opacity="50" p="2">
          Created at {thing.createdAt.toLocaleString()}
        </div>
      </div>
      <div cursor="pointer" onClick={e => onDelete(e, i)} opacity="50" p="2">
        {'\u2717'}
      </div>
    </div>
  );
}

export default Thing;
