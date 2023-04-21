/*
 * Copyright 2023 Marek Kobida
 */

import type React from 'react';
import type { Thing as T } from '../types';
import Thing from './Thing';

class Things {
  private things: Thing[];

  constructor(
    public currentListName: string,
    public setThings: React.Dispatch<React.SetStateAction<T[]>>,
    things: T[]
  ) {
    this.things = things.map((thing, i) => new Thing(i, this, thing));
  }

  get size(): number {
    return this.things.length;
  }

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

  *[Symbol.iterator]() {
    const things = this.filter();

    for (const thing of things) {
      yield thing;
    }
  }

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

  add(key: string, list: string): T {
    const newThing = { createdAt: new Date(), isDone: false, key, list };

    this.setThings(things => [...things, newThing]);

    return newThing;
  }

  filter(listName?: string): Thing[] {
    /* (1) */ listName = listName ?? this.currentListName;

    /* (2) */ let filteredThings = [...this.things];

    switch (listName) {
      case 'All':
        break;
      case 'Done':
        filteredThings = filteredThings.filter(thing => thing.isDone);
        break;
      case 'Not done':
        filteredThings = filteredThings.filter(thing => !thing.isDone);
        break;
      default:
        filteredThings = filteredThings.filter(thing => thing.list === listName);
        break;
    }

    return filteredThings;
  }

  get(i: number): Thing {
    return this.things.filter(thing => thing.i === i)[0];
  }
}

export default Things;
