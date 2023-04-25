/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';
import Option from './Option';

function Lists() {
  const { setCurrentListName, things } = React.useContext(helpers.context);

  const lists: (string | undefined)[] = [
    'All',
    'Done',
    'Not done',
    ...new Set([...things].map(thing => thing.listName)),
  ];

  return (
    <div opacity="50" spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="lists">
        Lists
      </label>
      <div alignItems="center" border="2" borderRadius="2" display="flex">
        <div p="2">{helpers.icons.down}</div>
        <select
          border="0"
          cursor="pointer"
          id="lists"
          onInput={e => setCurrentListName(e.currentTarget.value)}
          p="2"
          width="100"
        >
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
