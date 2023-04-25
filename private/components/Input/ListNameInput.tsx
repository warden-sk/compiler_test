/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type * as types from '../../types';

function ListNameInput({ listElement, onKeyDown }: types.ListNameInputI) {
  return (
    <div opacity="50" spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="listName">
        List name
      </label>
      <input
        border="2"
        borderRadius="2"
        id="listName"
        onKeyDown={onKeyDown}
        p="2"
        ref={listElement}
        type="text"
        width="100"
      />
    </div>
  );
}

export default ListNameInput;
