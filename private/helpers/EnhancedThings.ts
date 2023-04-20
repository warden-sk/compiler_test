/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type { Thing } from '../types';
import EnhancedThing from './EnhancedThing';

class EnhancedThings {
  things: EnhancedThing[];

  constructor(public setThings: React.Dispatch<React.SetStateAction<Thing[]>>, things: Thing[]) {
    this.things = things.map((thing, i) => new EnhancedThing(i, this, thing));
  }

  get size(): number {
    return this.things.length;
  }

  add(key: string, list: string): Thing {
    const newThing = { createdAt: new Date(), isDone: false, key, list };

    this.setThings(things => [...things, newThing]);

    return newThing;
  }

  get(i: number): EnhancedThing {
    return this.things.filter(thing => thing.i === i)[0];
  }

  *[Symbol.iterator]() {
    for (const thing of this.things) {
      yield thing;
    }
  }
}

export default EnhancedThings;
