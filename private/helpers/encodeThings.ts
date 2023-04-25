/*
 * Copyright 2023 Marek Kobida
 */

import type { Thing } from '../types';

function encodeThings(things: Thing[]): string {
  return things.reduce(($, thing, i) => {
    const createdAt: number = +thing.createdAt;
    const doneAt: number | string = thing.doneAt ? +thing.doneAt : '';
    const isDone: number = thing.isDone ? 1 : 0;
    const key: string = thing.key;
    const listName: string = thing.listName ? thing.listName : '';

    return `${i ? `${$};` : ''}${createdAt},${doneAt},${isDone},${key},${listName}`;
  }, '');
}

export default encodeThings;
