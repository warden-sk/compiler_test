/*
 * Copyright 2023 Marek Kobida
 */

import type { Thing } from '../types';
import type EnhancedThings from './EnhancedThings';

class EnhancedThing {
  createdAt: Date;
  isDone: boolean;
  key: string;

  constructor(public i: number, public parent: EnhancedThings, thing: Thing) {
    this.createdAt = thing.createdAt;
    this.i = i;
    this.isDone = thing.isDone;
    this.key = thing.key;
    this.parent = parent;
  }

  get isFirst(): boolean {
    return this.i === 0;
  }

  get isLast(): boolean {
    return this.i === this.parent.size - 1;
  }

  delete() {
    this.parent.setThings(things => {
      return things.filter((thing, i) => {
        return i !== this.i;
      });
    });
  }

  done() {
    this.parent.setThings(things => {
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
    this.parent.setThings(things => {
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
    this.parent.setThings(things => {
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
