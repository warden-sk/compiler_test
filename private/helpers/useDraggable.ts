import React from 'react';
import type { ThingType } from '../Client';

interface P {
  setThings: React.Dispatch<React.SetStateAction<ThingType[]>>;
  things: ThingType[];
}

let currentThingI = -1;

function useDraggable({ setThings, things }: P) {
  const onDragEnd = React.useCallback((i: number) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      currentThingI = -1;
    };
  }, []);

  const onDragOver = React.useCallback(
    (i: number) => {
      return (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        if (currentThingI !== i) {
          const newThings = [...things];

          newThings.splice(currentThingI, 1);
          newThings.splice(i, 0, things[currentThingI]);

          currentThingI = i;

          setThings(newThings);
        }
      };
    },
    [setThings, things]
  );

  const onDragStart = React.useCallback((i: number) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      currentThingI = i;
    };
  }, []);

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
