/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../helpers/context';
import type EnhancedThing from './EnhancedThing';

function useFilteredThings(listName?: string): EnhancedThing[] {
  const { currentListName, things } = React.useContext(context);

  /* (1) */ listName = listName ?? currentListName;

  /* (2) */ let filteredThings = [...things];

  if (listName === 'All') {
  } else if (listName === 'Done') {
    filteredThings = filteredThings.filter(thing => thing.isDone);
  } else if (listName === 'Not done') {
    filteredThings = filteredThings.filter(thing => !thing.isDone);
  } else {
    filteredThings = filteredThings.filter(thing => thing.list === listName);
  }

  return filteredThings;
}

export default useFilteredThings;
