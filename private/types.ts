/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type T from './helpers/Thing';

export interface ListNameInputI {
  listElement: React.MutableRefObject<HTMLInputElement | null>;
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

export interface Thing {
  createdAt: Date;
  doneAt?: Date;
  isDone: boolean;
  key: string;
  listName?: string;
}

export interface ThingI extends UseDraggableO {
  key: React.Key;
  thing: T;
}

export interface UseDraggableO {
  onDragEnd: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragOver: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
  onDragStart: (e: React.DragEvent<HTMLDivElement>, i: number) => void;
}
