/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../helpers';
import ListNameInput from './ListNameInput';

function Input() {
  const { things } = React.useContext(h.context);

  const onKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const keyElement = window.document.querySelector('#key') as HTMLInputElement;
      const listElement = window.document.querySelector('#listName') as HTMLInputElement;

      const key = keyElement.value;
      const list = listElement.value;

      if (key.length) {
        things.add(key, list);

        keyElement.value = '';
        listElement.value = '';
      }
    }
  }, []);

  return (
    <div spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="key">
        What has to be done?
      </label>
      <input border="2" borderRadius="2" id="key" onKeyDown={onKeyDown} p="2" type="text" width="100" />
      <ListNameInput onKeyDown={onKeyDown} />
    </div>
  );
}

export default Input;
