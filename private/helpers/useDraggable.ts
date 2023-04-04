import React from 'react';
import context from '../context';

let currentThingI = -1;

function useDraggable() {
  const { setThings, things } = React.useContext(context);

  const onDragEnd = React.useCallback((i: number) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      console.log(`onDragEnd at ${i}`);

      currentThingI = -1;
    };
  }, []);

  const onDragOver = React.useCallback(
    (i: number) => {
      return (e: React.DragEvent<HTMLDivElement>) => {
        console.log(`onDragOver at ${i}`);

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
      console.log(`onDragStart at ${i}`);

      currentThingI = i;
    };
  }, []);

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
