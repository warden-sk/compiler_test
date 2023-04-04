import type { ThingType } from '../Client';

/**
 * From [
 *   { isDone: false, key: 'Thing 1' },
 *   { isDone: true, key: 'Thing 2' },
 * ]
 *
 * To "0,Thing 1;1,Thing 2"
 */
function encodeThings(things: ThingType[]): string {
  return things.reduce(($, thing, i) => `${i ? `${$};` : ''}${thing.isDone ? 1 : 0},${thing.key}`, '');
}

export default encodeThings;
