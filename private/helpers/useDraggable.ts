import React from 'react';
import type { Thing } from '../Client';

interface P {
  setThings: React.Dispatch<React.SetStateAction<Thing[]>>;
  things: Thing[];
}

function useDraggable({ setThings, things }: P) {
  const [draggingIndex, setDraggingIndex] = React.useState<number>();
  const [draggingThing, setDraggingThing] = React.useState<HTMLDivElement>();

  const onDragEnd = React.useCallback((i: number) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      setDraggingIndex(undefined);
      setDraggingThing(undefined);
    };
  }, []);

  const onDragOver = React.useCallback(
    (i: number) => {
      return (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();

        const draggedOverItem = e.currentTarget;

        if (draggedOverItem !== draggingThing) {
          const newThings = [...things];

          newThings.splice(draggingIndex!, 1);
          newThings.splice(i, 0, things[draggingIndex!]);

          setDraggingIndex(i);

          setThings(newThings);
        }
      };
    },
    [draggingIndex, draggingThing, setThings, things]
  );

  const onDragStart = React.useCallback((i: number) => {
    return (e: React.DragEvent<HTMLDivElement>) => {
      setDraggingIndex(i);
      setDraggingThing(e.currentTarget);

      e.dataTransfer.effectAllowed = 'move';
    };
  }, []);

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
