/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type EnhanceThing from './helpers/EnhanceThing';

export interface Thing {
  createdAt: Date;
  isDone: boolean;
  key: string;
}

export interface ThingInput extends UseDraggableOutput {
  key: string;
  thing: EnhanceThing;
}

export interface UseDraggableOutput {
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
}
