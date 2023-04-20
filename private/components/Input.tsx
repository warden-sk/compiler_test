/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../helpers/context';

function Input() {
  const { things } = React.useContext(context);

  const onKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const key = (window.document.querySelector('#key') as HTMLInputElement).value.replace(/^\s+|\s+$/g, '');
      const list = (window.document.querySelector('#list') as HTMLInputElement).value.replace(/^\s+|\s+$/g, '');

      if (key.length) {
        things.add(key, list || 'undefined');

        (window.document.querySelector('#key') as HTMLInputElement).value = '';
        (window.document.querySelector('#list') as HTMLInputElement).value = '';
      }
    }
  }, []);

  return (
    <div spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="key">
        What has to be done?
      </label>
      <input border="2" borderRadius="2" id="key" onKeyDown={onKeyDown} p="2" type="text" width="100" />
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="list">
        List
      </label>
      <input border="2" borderRadius="2" id="list" onKeyDown={onKeyDown} p="2" type="text" width="100" />
    </div>
  );
}

export default Input;
