/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';

function Input() {
  const { things } = React.useContext(helpers.context);

  const keyElement = React.useRef<HTMLInputElement | null>(null);
  const listNameElement = React.useRef<HTMLInputElement | null>(null);

  const onKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyElement.current && listNameElement.current) {
      const key = keyElement.current.value;
      const listName = listNameElement.current.value;

      if (key.length) {
        things.add(key, listName);

        keyElement.current.value = '';
        listNameElement.current.value = '';
      }
    }
  }, []);

  return (
    <div spaceY="2">
      {/* (1) */}
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="key">
        What has to be done?
      </label>
      <input
        border="2"
        borderRadius="2"
        id="key"
        onKeyDown={onKeyDown}
        p="2"
        ref={keyElement}
        type="text"
        width="100"
      />
      {/* (2) */}
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
          ref={listNameElement}
          type="text"
          width="100"
        />
      </div>
    </div>
  );
}

export default Input;
