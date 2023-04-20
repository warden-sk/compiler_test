/*
 * Copyright 2023 Marek Kobida
 */

import type { Thing } from '../types';

const pattern = /([0-9]{13}),(0|1),([^,]+),([^;]+)/g;

/**
 * From "0,0,Thing 1,List 1;0,1,Thing 2,List 1"
 *
 * To [
 *   { createdAt: Date, isDone: false, key: 'Thing 1', list: 'List 1' },
 *   { createdAt: Date, isDone: true, key: 'Thing 2', list: 'List 1' },
 * ]
 */
function decodeThings(things: string): Thing[] {
  let $;
  let decodedThings: Thing[] = [];

  while (($ = pattern.exec(things)) !== null) {
    decodedThings = [...decodedThings, { createdAt: new Date(+$[1]), isDone: $[2] === '1', key: $[3], list: $[4] }];
  }

  return decodedThings;
}

export default decodeThings;
