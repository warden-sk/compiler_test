import React from 'react';
import type { Thing } from '../Client';

interface P {
  things: Thing[];
  updateThings: React.Dispatch<React.SetStateAction<Thing[]>>;
}

function useDraggable({ things, updateThings }: P) {
  const [draggingIndex, setDraggingIndex] = React.useState<number>();
  const [draggingThing, setDraggingThing] = React.useState<HTMLDivElement>();

  function onDragEnd(i: number) {
    return (e: React.DragEvent<HTMLDivElement>) => {
      setDraggingIndex(undefined);
      setDraggingThing(undefined);
    };
  }

  function onDragOver(i: number) {
    return (e: React.DragEvent<HTMLDivElement>) => {
      e.preventDefault();

      const draggedOverItem = e.currentTarget;

      if (draggingThing !== draggedOverItem) {
        const newThings = [...things];

        newThings.splice(draggingIndex!, 1);
        newThings.splice(i, 0, things[draggingIndex!]);

        setDraggingIndex(i);

        updateThings(newThings);
      }
    };
  }

  function onDragStart(i: number) {
    return (e: React.DragEvent<HTMLDivElement>) => {
      setDraggingIndex(i);
      setDraggingThing(e.currentTarget);

      e.dataTransfer.effectAllowed = 'move';
    };
  }

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
