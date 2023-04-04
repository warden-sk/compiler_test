import type { Thing } from '../Client';

function decodeThings(things: string): Thing[] {
  const pattern = /(false|true),([^;]+)/g;
  let $;
  let decodedThings: Thing[] = [];

  while (($ = pattern.exec(things)) !== null) {
    decodedThings = [...decodedThings, { isDone: $[1] === 'true', key: $[2] }];
  }

  return decodedThings;
}

export default decodeThings;
