/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type { Thing as T } from '../types';
import Thing from './Thing';

class Things {
  private things: Thing[];

  constructor(public setThings: React.Dispatch<React.SetStateAction<T[]>>, things: T[]) {
    this.things = things.map((thing, i) => new Thing(i, this, thing));
  }

  get size(): number {
    return this.things.length;
  }

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

  *[Symbol.iterator]() {
    for (const thing of this.things) {
      yield thing;
    }
  }

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

  add(key: string, list: string): T {
    const newThing = { createdAt: new Date(), isDone: false, key, list };

    this.setThings(things => [...things, newThing]);

    return newThing;
  }

  get(i: number): Thing {
    return this.things.filter(thing => thing.i === i)[0];
  }
}

export default Things;
