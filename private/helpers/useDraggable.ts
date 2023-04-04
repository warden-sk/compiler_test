import React from 'react';
import context from '../context';

let currentThingI: number | undefined;

function useDraggable() {
  const { setThings, things } = React.useContext(context);

  const onDragEnd = React.useCallback((e: React.DragEvent<HTMLDivElement>, i: number) => {
    console.log(`onDragEnd at ${i}`);

    currentThingI = undefined;
  }, []);

  const onDragOver = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>, i: number) => {
      console.log(`onDragOver at ${i}`);

      e.preventDefault();

      if (currentThingI !== i) {
        const newThings = [...things];
        newThings.splice(currentThingI!, 1);
        newThings.splice(i, 0, things[currentThingI!]);

        setThings(newThings);

        currentThingI = i;
      }
    },
    [setThings, things]
  );

  const onDragStart = React.useCallback((e: React.DragEvent<HTMLDivElement>, i: number) => {
    console.log(`onDragStart at ${i}`);

    currentThingI = i;
  }, []);

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
