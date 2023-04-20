/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type { Thing } from '../types';
import EnhancedThing from './EnhancedThing';

class EnhancedThings {
  enhancedThing: EnhancedThing[];

  constructor(public setThings: React.Dispatch<React.SetStateAction<Thing[]>>, public things: Thing[]) {
    this.enhancedThing = things.map((thing, i) => new EnhancedThing(i, this, thing));
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

  add(key: string, list: string): Thing {
    const newThing = { createdAt: new Date(), isDone: false, key, list };

    this.setThings(things => [...things, newThing]);

    return newThing;
  }

  get(i: number): EnhancedThing {
    return this.enhancedThing.filter(thing => thing.i === i)[0];
  }
}

export default EnhancedThings;
