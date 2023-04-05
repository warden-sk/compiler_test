/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';

export interface Thing {
  createdAt: Date;
  isDone: boolean;
  key: string;
}

export interface ThingInput extends UseDraggableOutput {
  i: number;
  key: string;
  thing: Thing;
}

export interface UseDraggableOutput {
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
}
