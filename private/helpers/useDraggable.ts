import React from 'react';
import type { Thing } from '../Client';

interface P {
  setThings: React.Dispatch<React.SetStateAction<Thing[]>>;
  things: Thing[];
}

function useDraggable({ setThings, things }: P) {
  const [$, set] = React.useState<[number, HTMLDivElement]>();

  const onDragEnd = React.useCallback((i: number) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      set(undefined);
    };
  }, []);

  const onDragOver = React.useCallback(
    (i: number) => {
      return (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        if ($ && $[1] !== e.currentTarget) {
          const newThings = [...things];

          newThings.splice($[0], 1);
          newThings.splice(i, 0, things[$[0]]);

          set([i, $[1]]);

          setThings(newThings);
        }
      };
    },
    [$, setThings, things]
  );

  const onDragStart = React.useCallback((i: number) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      set([i, e.currentTarget]);
    };
  }, []);

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
