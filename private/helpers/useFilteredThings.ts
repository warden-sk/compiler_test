/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../helpers/context';
import type EnhancedThing from './EnhancedThing';

function useFilteredThings(listName?: string): EnhancedThing[] {
  const { currentListName, things } = React.useContext(context);

  const $: string = listName ?? currentListName;

  let filteredThings = [...things];

  if ($ === 'All') {
  } else if ($ === 'Done') {
    filteredThings = filteredThings.filter(thing => thing.isDone);
  } else if ($ === 'Not done') {
    filteredThings = filteredThings.filter(thing => !thing.isDone);
  } else {
    filteredThings = filteredThings.filter(thing => thing.list === $);
  }

  return filteredThings;
}

export default useFilteredThings;
