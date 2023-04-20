/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type { Thing } from '../types';
import EnhancedThing from './EnhancedThing';

class EnhancedThings {
  setThings: React.Dispatch<React.SetStateAction<Thing[]>>;
  size: number;
  things: EnhancedThing[];

  constructor(setThings: React.Dispatch<React.SetStateAction<Thing[]>>, things: Thing[]) {
    this.setThings = setThings;
    this.size = things.length;
    this.things = things.map((thing, i) => new EnhancedThing(i, setThings, thing));
  }

  add(key: string): Thing {
    const newThing = { createdAt: new Date(), isDone: false, key };

    this.setThings(things => [...things, newThing]);

    return newThing;
  }

  get(i: number): EnhancedThing {
    return this.things.filter(thing => thing.i === i)[0];
  }
}

export default EnhancedThings;
