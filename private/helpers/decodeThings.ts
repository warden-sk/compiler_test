import type { Thing } from '../Client';

const pattern = /(0|1),([^;]+)/g;

/**
 * From "0,Thing 1;1,Thing 2"
 *
 * To [
 *   { isDone: false, key: 'Thing 1' },
 *   { isDone: true, key: 'Thing 2' },
 * ]
 */
function decodeThings(things: string): Thing[] {
  let $;
  let decodedThings: Thing[] = [];

  while (($ = pattern.exec(things)) !== null) {
    decodedThings = [...decodedThings, { isDone: $[1] === '1', key: $[2] }];
  }

  return decodedThings;
}

export default decodeThings;
