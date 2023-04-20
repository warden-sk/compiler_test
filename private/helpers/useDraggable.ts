/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type { UseDraggableOutput } from '../types';
import context from './context';

function useDraggable(): UseDraggableOutput {
  const [currentThingI, setCurrentThingI] = React.useState<number>();
  const { things } = React.useContext(context);

  const onDragEnd = React.useCallback((e: React.DragEvent<HTMLDivElement>, i: number) => {
    setCurrentThingI(undefined);
  }, []);

  const onDragOver = React.useCallback(
    (e: React.DragEvent<HTMLDivElement>, i: number) => {
      e.preventDefault();

      if (currentThingI !== i) {
        const thing = things.get(currentThingI!);

        thing.move(i);

        setCurrentThingI(i);
      }
    },
    [currentThingI]
  );

  const onDragStart = React.useCallback((e: React.DragEvent<HTMLDivElement>, i: number) => {
    setCurrentThingI(i);
  }, []);

  return { onDragEnd, onDragOver, onDragStart };
}

export default useDraggable;
