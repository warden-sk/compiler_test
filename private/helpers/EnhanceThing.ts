/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type { Thing } from '../types';

class EnhanceThing {
  createdAt: Date;
  isDone: boolean;
  key: string;

  constructor(
    public i: number,
    public setThings: React.Dispatch<React.SetStateAction<Thing[]>>,
    public thing: Thing,
    public things: Thing[]
  ) {
    this.createdAt = thing.createdAt;
    this.isDone = thing.isDone;
    this.key = thing.key;
  }

  moveDown() {
    const newThings = [...this.things];
    newThings.splice(this.i, 1);
    newThings.splice(this.i + 1, 0, this.things[this.i]);

    this.setThings(newThings);
  }

  moveUp() {
    const newThings = [...this.things];
    newThings.splice(this.i, 1);
    newThings.splice(this.i - 1, 0, this.things[this.i]);

    this.setThings(newThings);
  }
}

export default EnhanceThing;
