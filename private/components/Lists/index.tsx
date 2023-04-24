/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../../helpers';
import Option from './Option';

function Lists() {
  const { setCurrentListName, things } = React.useContext(h.context);

  const lists: (string | undefined)[] = ['All', 'Done', 'Not done', ...new Set([...things].map(thing => thing.list))];

  return (
    <div opacity="50" spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="lists">
        Lists
      </label>
      <div alignItems="center" border="2" borderRadius="2" display="flex" p="2" spaceX="2">
        <div>{h.icons.down}</div>
        <select border="0" id="lists" onInput={e => setCurrentListName(e.currentTarget.value)} width="100">
          {lists.map(listName => {
            if (listName) {
              return <Option key={listName} listName={listName} />;
            }
          })}
        </select>
      </div>
    </div>
  );
}

export default Lists;
