/*
 * Copyright 2023 Marek Kobida
 */

import type { Thing } from '../types';

const pattern = /([0-9]{13}),([^,]+),(0|1),([^,]+),([^;]+)/g;

function decodeThings(things: string): Thing[] {
  let $;
  let decodedThings: Thing[] = [];

  while (($ = pattern.exec(things)) !== null) {
    const decodedThing = {
      createdAt: new Date(+$[1]),
      doneAt: $[2] === '-1' ? undefined : new Date(+$[2]),
      isDone: $[3] === '1',
      key: $[4],
      list: $[5],
    };

    decodedThings = [...decodedThings, decodedThing];
  }

  return decodedThings;
}

export default decodeThings;
