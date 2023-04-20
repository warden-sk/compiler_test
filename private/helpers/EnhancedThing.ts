/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type { Thing } from '../types';

class EnhancedThing {
  createdAt: Date;
  isDone: boolean;
  key: string;

  constructor(public i: number, public setThings: React.Dispatch<React.SetStateAction<Thing[]>>, public thing: Thing) {
    this.createdAt = thing.createdAt;
    this.isDone = thing.isDone;
    this.key = thing.key;
  }

  delete() {
    this.setThings(things => {
      return things.filter((thing, k) => {
        return k !== this.i;
      });
    });
  }

  done() {
    this.setThings(things => {
      return things.map((thing, k) => {
        if (k === this.i) {
          return { ...thing, isDone: !thing.isDone };
        } else {
          return thing;
        }
      });
    });
  }

  moveDown() {
    this.setThings(things => {
      const newThings = [...things];
      newThings.splice(this.i, 1);
      newThings.splice(this.i + 1, 0, things[this.i]);

      return newThings;
    });
  }

  moveUp() {
    this.setThings(things => {
      const newThings = [...things];
      newThings.splice(this.i, 1);
      newThings.splice(this.i - 1, 0, things[this.i]);

      return newThings;
    });
  }

  update(key: string) {
    this.setThings(things => {
      return things.map((thing, k) => {
        if (k === this.i) {
          return { ...thing, key };
        } else {
          return thing;
        }
      });
    });
  }
}

export default EnhancedThing;
