/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type ThingHelper from './helpers/Thing';

export interface Thing {
  createdAt: Date;
  doneAt?: Date;
  isDone: boolean;
  key: string;
  list: string;
}

export interface ThingInput extends UseDraggableOutput {
  key: string;
  thing: ThingHelper;
}

export interface UseDraggableOutput {
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
}
