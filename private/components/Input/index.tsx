/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';
import ListNameInput from './ListNameInput';

function Input() {
  const { things } = React.useContext(helpers.context);

  const keyElement = React.useRef<HTMLInputElement | null>(null);
  const listElement = React.useRef<HTMLInputElement | null>(null);

  const onKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && keyElement.current && listElement.current) {
      const key = keyElement.current.value;
      const list = listElement.current.value;

      if (key.length) {
        things.add(key, list);

        keyElement.current.value = '';
        listElement.current.value = '';
      }
    }
  }, []);

  return (
    <div spaceY="2">
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
      <ListNameInput listElement={listElement} onKeyDown={onKeyDown} />
    </div>
  );
}

export default Input;
