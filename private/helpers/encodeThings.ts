import type { ThingType } from '../Client';

/**
 * From [
 *   { createdAt: Date, isDone: false, key: 'Thing 1' },
 *   { createdAt: Date, isDone: true, key: 'Thing 2' },
 * ]
 *
 * To "0,0,Thing 1;0,1,Thing 2"
 */
function encodeThings(things: ThingType[]): string {
  return things.reduce(
    ($, thing, i) => `${i ? `${$};` : ''}${+thing.createdAt},${thing.isDone ? 1 : 0},${thing.key}`,
    ''
  );
}

export default encodeThings;
