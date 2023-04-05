import React from 'react';
import context from '../helpers/context';
import type { UseDraggableOutput } from '../types';

function useDraggable(): UseDraggableOutput {
  const [currentThingI, setCurrentThingI] = React.useState<number>();
  const { setThings, things } = React.useContext(context);

  const onDragEnd = React.useCallback((e: React.DragEvent<HTMLDivElement>, i: number) => {
    setCurrentThingI(undefined);
  }, []);

  const onDragOver = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>, i: number) => {
      e.preventDefault();

      if (currentThingI !== i) {
        const newThings = [...things];
        newThings.splice(currentThingI!, 1);
        newThings.splice(i, 0, things[currentThingI!]);

        setThings(newThings);

        setCurrentThingI(i);
      }
    },
    [currentThingI, setThings, things]
  );

  const onDragStart = React.useCallback((e: React.DragEvent<HTMLDivElement>, i: number) => {
    setCurrentThingI(i);
  }, []);

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
