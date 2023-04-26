/*
 * Copyright 2023 Marek Kobida
 */

function decodeDate(date: Date): string {
  return `${date.getDate()}.${date.getMonth() + 1}. ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

export default decodeDate;
