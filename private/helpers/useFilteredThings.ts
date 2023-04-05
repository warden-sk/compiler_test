import React from 'react';
import context from '../helpers/context';
import type { Thing } from '../types';

function useFilteredThings(list?: string): Thing[] {
  const { currentList, things } = React.useContext(context);

  const $: string = list ?? currentList;

  let filteredThings = [...things];

  if ($ === 'Done') {
    filteredThings = filteredThings.filter(thing => thing.isDone);
  }

  if ($ === 'Not done') {
    filteredThings = filteredThings.filter(thing => !thing.isDone);
  }

  return filteredThings;
}

export default useFilteredThings;
