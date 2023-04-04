import React from 'react';
import context from '../context';

interface O {
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
}

function useDraggable(): O {
  const [currentThingI, setCurrentThingI] = React.useState<number>();
  const { setThings, things } = React.useContext(context);

  const onDragEnd = React.useCallback((e: React.DragEvent<HTMLDivElement>, i: number) => {
    console.log(`onDragEnd at ${i}`);

    setCurrentThingI(undefined);
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

        setCurrentThingI(i);
      }
    },
    [setThings, things]
  );

  const onDragStart = React.useCallback((e: React.DragEvent<HTMLDivElement>, i: number) => {
    console.log(`onDragStart at ${i}`);

    setCurrentThingI(i);
  }, []);

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
