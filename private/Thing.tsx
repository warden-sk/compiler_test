import React from 'react';
import type { ThingType } from './Client';
import './Client.css';
import useDraggable from './helpers/useDraggable';

interface P {
  i: number;
  setThings: React.Dispatch<React.SetStateAction<ThingType[]>>;
  thing: ThingType;
  things: ThingType[];
}

function Thing({ i, setThings, thing, things }: P) {
  const { onDragEnd, onDragOver, onDragStart } = useDraggable({ setThings, things });

  function onDelete(i: number) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      setThings(things => {
        return things.filter((thing, j) => {
          return j !== i;
        });
      });
    };
  }

  function onDone(i: number) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      setThings(things => {
        return things.map((thing, j) => {
          if (j === i) {
            return { ...thing, isDone: !thing.isDone };
          } else {
            return thing;
          }
        });
      });
    };
  }

  function onUpdate(i: number) {
    return (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        const key: string = e.currentTarget.value;

        setThings(things => {
          return things.map((thing, j) => {
            if (j === i) {
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
      key={thing.key}
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
