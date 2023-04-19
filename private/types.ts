/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type EnhancedThing from './helpers/EnhancedThing';

export interface Thing {
  createdAt: Date;
  isDone: boolean;
  key: string;
}

export interface ThingInput extends UseDraggableOutput {
  key: string;
  thing: EnhancedThing;
}

export interface UseDraggableOutput {
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
}
