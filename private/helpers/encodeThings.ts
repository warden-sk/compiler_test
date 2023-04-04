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
  return things.reduce(($, thing, i) => {
    const text = `${thing.isDone},${thing.key}`;

    return i === 0 ? text : `${$};${text}`;
  }, '');
}

export default encodeThings;
