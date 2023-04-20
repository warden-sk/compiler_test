/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from './context';
import type Thing from './Thing';

function useFilteredThings(listName?: string): Thing[] {
  const { currentListName, things } = React.useContext(context);

  /* (1) */ listName = listName ?? currentListName;

  /* (2) */ let filteredThings = [...things];

  switch (listName) {
    case 'All':
      break;
    case 'Done':
      filteredThings = filteredThings.filter(thing => thing.isDone);
      break;
    case 'Not done':
      filteredThings = filteredThings.filter(thing => !thing.isDone);
      break;
    default:
      filteredThings = filteredThings.filter(thing => thing.list === listName);
      break;
  }

  return filteredThings;
}

export default useFilteredThings;
