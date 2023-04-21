/*
 * Copyright 2023 Marek Kobida
 */

import type { Thing } from '../types';

function encodeThings(things: Thing[]): string {
  return things.reduce(($, thing, i) => {
    const createdAt: number = +thing.createdAt;
    const doneAt: number = thing.doneAt ? +thing.doneAt : -1;
    const isDone: number = thing.isDone ? 1 : 0;
    const key: string = thing.key.replace(/([:;])/g, '\\$1');
    const list: number | string = thing.list ? thing.list.replace(/([:;])/g, '\\$1') : -1;

    return `${i ? `${$};` : ''}${createdAt},${doneAt},${isDone},${key},${list}`;
  }, '');
}

export default encodeThings;
