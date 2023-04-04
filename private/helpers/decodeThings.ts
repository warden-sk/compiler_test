import type { Thing } from '../Client';

const pattern = /(false|true),([^;]+)/g;

/**
 * From "false,Thing 1;true,Thing 2"
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
    decodedThings = [...decodedThings, { isDone: $[1] === 'true', key: $[2] }];
  }

  return decodedThings;
}

export default decodeThings;
