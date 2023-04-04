import type { Thing } from '../Client';

const pattern = /(false|true),([^;]+)/g;

function decodeThings(things: string): Thing[] {
  let $;
  let decodedThings: Thing[] = [];

  while (($ = pattern.exec(things)) !== null) {
    decodedThings = [...decodedThings, { isDone: $[1] === 'true', key: $[2] }];
  }

  return decodedThings;
}

export default decodeThings;
