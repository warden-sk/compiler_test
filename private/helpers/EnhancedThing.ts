/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type { Thing } from '../types';

class EnhancedThing {
  createdAt: Date;
  i: number;
  isDone: boolean;
  key: string;
  setThings: React.Dispatch<React.SetStateAction<Thing[]>>;

  constructor(i: number, setThings: React.Dispatch<React.SetStateAction<Thing[]>>, thing: Thing) {
    this.createdAt = thing.createdAt;
    this.i = i;
    this.isDone = thing.isDone;
    this.key = thing.key;
    this.setThings = setThings;
  }

  delete() {
    this.setThings(things => {
      return things.filter((thing, i) => {
        return i !== this.i;
      });
    });
  }

  done() {
    this.setThings(things => {
      return things.map((thing, i) => {
        if (i === this.i) {
          return { ...thing, isDone: !thing.isDone };
        } else {
          return thing;
        }
      });
    });
  }

  move(to: number) {
    this.setThings(things => {
      const newThings = [...things];
      newThings.splice(this.i, 1);
      newThings.splice(to, 0, things[this.i]);

      return newThings;
    });
  }

  moveDown() {
    this.move(this.i + 1);
  }

  moveUp() {
    this.move(this.i - 1);
  }

  update(key: string) {
    this.setThings(things => {
      return things.map((thing, i) => {
        if (i === this.i) {
          return { ...thing, key };
        } else {
          return thing;
        }
      });
    });
  }
}

export default EnhancedThing;
