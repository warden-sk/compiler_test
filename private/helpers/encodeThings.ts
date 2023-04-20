/*
 * Copyright 2023 Marek Kobida
 */

import type { Thing } from '../types';

/**
 * From [
 *   { createdAt: Date, isDone: false, key: 'Thing 1' },
 *   { createdAt: Date, isDone: true, key: 'Thing 2' },
 * ]
 *
 * To "0,0,Thing 1;0,1,Thing 2"
 */
function encodeThings(things: Thing[]): string {
  return things.reduce(($, thing, i) => {
    const createdAt: number = +thing.createdAt;
    const isDone: number = thing.isDone ? 1 : 0;
    const key: string = thing.key.replace(/([:;])/g, '\\$1');

    return `${i ? `${$};` : ''}${createdAt},${isDone},undefined,${key}`;
  }, '');
}

export default encodeThings;
