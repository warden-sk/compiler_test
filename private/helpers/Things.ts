/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type { Thing as T } from '../types';
import Thing from './Thing';

class Things {
  enhancedThing: Thing[];

  constructor(public setThings: React.Dispatch<React.SetStateAction<T[]>>, public things: T[]) {
    this.enhancedThing = things.map((thing, i) => new Thing(i, this, thing));
  }

  get size(): number {
    return this.enhancedThing.length;
  }

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

  *[Symbol.iterator]() {
    for (const thing of this.enhancedThing) {
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
    return this.enhancedThing.filter(thing => thing.i === i)[0];
  }
}

export default Things;
