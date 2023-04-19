/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../helpers/context';
import useFilteredThings from '../helpers/useFilteredThings';

function Lists() {
  const { setCurrentListName } = React.useContext(context);

  return (
    <div spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="lists">
        Lists
      </label>
      <div alignItems="center" border="2" borderRadius="2" className="lists" display="flex">
        <div p="2">{'\u2193'}</div>
        <select border="0" id="lists" onInput={e => setCurrentListName(e.currentTarget.value)} p="2" width="100">
          {['All', 'Done', 'Not done'].map(listName => {
            const filteredThings = useFilteredThings(listName);

            return (
              <option key={listName} value={listName}>
                {listName} ({filteredThings.length})
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

export default Lists;
