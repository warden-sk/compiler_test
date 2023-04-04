import React from 'react';
import type { ThingType } from '../Client';

interface P {
  currentThingI: number | undefined;
  setCurrentThingI: React.Dispatch<React.SetStateAction<number | undefined>>;
  setThings: React.Dispatch<React.SetStateAction<ThingType[]>>;
  things: ThingType[];
}

function useDraggable({ currentThingI, setCurrentThingI, setThings, things }: P) {
  const onDragEnd = React.useCallback((i: number) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      setCurrentThingI(undefined);
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

          setCurrentThingI(i);

          setThings(newThings);
        }
      };
    },
    [currentThingI, setThings, things]
  );

  const onDragStart = React.useCallback((i: number) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      setCurrentThingI(i);
    };
  }, []);

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
