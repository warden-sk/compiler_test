import type { Thing } from '../Client';

/**
 * From [
 *   { isDone: false, key: 'Thing 1' },
 *   { isDone: true, key: 'Thing 2' },
 * ]
 *
 * To "false,Thing 1;true,Thing 2"
 */
function encodeThings(things: Thing[]): string {
  return things.reduce(($, thing, i) => `${i ? `${$};` : ''}${thing.isDone},${thing.key}`, '');
}

export default encodeThings;
