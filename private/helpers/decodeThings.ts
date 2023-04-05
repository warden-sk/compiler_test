import type { ThingType } from '../components/Client';

const pattern = /([0-9]{13}),(0|1),([^;]+)/g;

/**
 * From "0,0,Thing 1;0,1,Thing 2"
 *
 * To [
 *   { createdAt: Date, isDone: false, key: 'Thing 1' },
 *   { createdAt: Date, isDone: true, key: 'Thing 2' },
 * ]
 */
function decodeThings(things: string): ThingType[] {
  let $;
  let decodedThings: ThingType[] = [];

  while (($ = pattern.exec(things)) !== null) {
    decodedThings = [...decodedThings, { createdAt: new Date(+$[1]), isDone: $[2] === '1', key: $[3] }];
  }

  return decodedThings;
}

export default decodeThings;
