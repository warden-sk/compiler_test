/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../helpers/context';
import type { Thing } from '../types';

function useFilteredThings(listName?: string): (Thing & { i: number })[] {
  const { currentListName, things } = React.useContext(context);

  const $: string = listName ?? currentListName;

  let filteredThings = [...things].map((thing, i) => ({ ...thing, i }));

  if ($ === 'Done') {
    filteredThings = filteredThings.filter(thing => thing.isDone);
  }

  if ($ === 'Not done') {
    filteredThings = filteredThings.filter(thing => !thing.isDone);
  }

  return filteredThings;
}

export default useFilteredThings;
