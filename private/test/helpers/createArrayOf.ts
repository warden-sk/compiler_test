/*
 * Copyright 2023 Marek Kobida
 */

function createArrayOf(i: number): number[] {
  return [...new Array(i)].map((...[, j]) => j + 1);
}

export default createArrayOf;
