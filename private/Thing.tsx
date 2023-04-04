import React from 'react';
import type { ThingType } from './Client';
import './Client.css';
import context from './context';
import useDraggable from './helpers/useDraggable';

interface I {
  i: number;
  key: string;
  thing: ThingType;
}

function Thing({ i, thing }: I) {
  const { onDragEnd, onDragOver, onDragStart } = useDraggable();
  const { setThings } = React.useContext(context);

  function onDelete(j: number) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      setThings(things => {
        return things.filter((thing, k) => {
          return k !== j;
        });
      });
    };
  }

  function onDone(j: number) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      setThings(things => {
        return things.map((thing, k) => {
          if (k === j) {
            return { ...thing, isDone: !thing.isDone };
          } else {
            return thing;
          }
        });
      });
    };
  }

  function onUpdate(j: number) {
    return (e: React.KeyboardEvent<HTMLInputElement>) => {
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
    };
  }

  return (
    <div
      alignItems="center"
      className={{ done: thing.isDone }}
      display="flex"
      draggable
      onDragEnd={onDragEnd(i)}
      onDragOver={onDragOver(i)}
      onDragStart={onDragStart(i)}
      spaceX="4"
    >
      <div
        border="2"
        borderRadius="2"
        cursor="pointer"
        fontWeight={thing.isDone && '600'}
        lineHeight="1"
        onClick={onDone(i)}
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
        onKeyDown={onUpdate(i)}
        p="2"
        type="text"
        width="100"
      />
      <div cursor="pointer" fontWeight="600" lineHeight="1" onClick={onDelete(i)} p="2">
        {'\u2717'}
      </div>
    </div>
  );
}

export default Thing;
