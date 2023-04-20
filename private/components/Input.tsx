/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../helpers/context';

function Input() {
  const { things } = React.useContext(context);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const key = e.currentTarget.value.replace(/^\s+|\s+$/g, '');

      if (key.length) {
        things.add(key);

        e.currentTarget.value = '';
      }
    }
  }

  return (
    <div spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="input">
        What has to be done?
      </label>
      <input border="2" borderRadius="2" id="input" onKeyDown={onKeyDown} p="2" type="text" width="100" />
    </div>
  );
}

export default Input;
