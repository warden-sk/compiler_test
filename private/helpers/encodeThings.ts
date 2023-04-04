import type { Thing } from '../Client';

function encodeThings(things: Thing[]): string {
  return things.reduce(($, thing, i) => {
    const text = `${thing.isDone},${thing.key}`;

    return i === 0 ? text : `${$};${text}`;
  }, '');
}

export default encodeThings;
