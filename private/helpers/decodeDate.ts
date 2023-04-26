/*
 * Copyright 2023 Marek Kobida
 */

function decodeDate(date: Date): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
  const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();

  return `${day}.${month}. ${hours}:${minutes}:${seconds}`;
}

export default decodeDate;
