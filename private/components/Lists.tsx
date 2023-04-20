/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../helpers/context';
import useFilteredThings from '../helpers/useFilteredThings';

function Option({ listName }: { key: string; listName: string }) {
  const filteredThings = useFilteredThings(listName);

  return (
    <option value={listName}>
      {listName} ({filteredThings.length})
    </option>
  );
}

function Lists() {
  const { setCurrentListName, things } = React.useContext(context);

  let lists: string[] = [...things].map(thing => thing.list);

  lists = lists.reduce<string[]>(
    ($, currentValue) => {
      if (currentValue === 'undefined') {
        return $;
      }

      if ($.indexOf(currentValue) !== -1) {
        return $;
      }

      return [...$, currentValue];
    },
    ['All', 'Done', 'Not done']
  );

  return (
    <div spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="lists">
        Lists
      </label>
      <div alignItems="center" border="2" borderRadius="2" className="lists" display="flex" p="2" spaceX="2">
        <div>{'\u2193'}</div>
        <select border="0" id="lists" onInput={e => setCurrentListName(e.currentTarget.value)} width="100">
          {lists.map(listName => (
            <Option key={listName} listName={listName} />
          ))}
        </select>
      </div>
    </div>
  );
}

export default Lists;
