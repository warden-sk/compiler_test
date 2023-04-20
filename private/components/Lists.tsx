/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../helpers';

function Option({ listName }: { key: React.Key; listName: string }) {
  const { things } = React.useContext(h.context);

  return (
    <option value={listName}>
      {listName} {`\u2192`} {things.filter(listName).length}
    </option>
  );
}

function Lists() {
  const { setCurrentListName, things } = React.useContext(h.context);

  const lists: string[] = [
    'All',
    'Done',
    'Not done',
    ...new Set([...things].map(thing => thing.list).filter(list => list !== '-1')),
  ];

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
