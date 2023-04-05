import React from 'react';
import context from '../helpers/context';
import type { UseDraggableOutput } from '../helpers/useDraggable';
import type { ThingType } from './Client';

interface ThingInput extends UseDraggableOutput {
  i: number;
  key: string;
  thing: ThingType;
}

function Thing({ i, onDragEnd, onDragOver, onDragStart, thing }: ThingInput) {
  const { setThings } = React.useContext(context);

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
      const key: string = e.currentTarget.value;

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

  return (
    <div
      alignItems="center"
      className={{ done: thing.isDone }}
      display="flex"
      draggable
      onDragEnd={e => onDragEnd(e, i)}
      onDragOver={e => onDragOver(e, i)}
      onDragStart={e => onDragStart(e, i)}
      spaceX="4"
    >
      {false && (
        <div display="flex" spaceX="2">
          <div cursor="pointer">{`\u2191`}</div>
          <div cursor="pointer">{`\u2193`}</div>
        </div>
      )}
      <div
        border="2"
        borderRadius="2"
        cursor="pointer"
        fontWeight={thing.isDone && '600'}
        lineHeight="1"
        onClick={e => onDone(e, i)}
        opacity={thing.isDone ? '100' : '50'}
        p="2"
      >
        {'\u2713'}
      </div>
      <input
        border="0"
        defaultValue={thing.key}
        fontWeight={thing.isDone && '600'}
        lineHeight="1"
        onKeyDown={e => onUpdate(e, i)}
        p="2"
        type="text"
        width="100"
      />
      <div cursor="pointer" fontWeight="600" lineHeight="1" onClick={e => onDelete(e, i)} p="2">
        {'\u2717'}
      </div>
    </div>
  );
}

export default Thing;
