/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../helpers';

function Input() {
  const [a, setA] = React.useState<boolean>(false);
  const { things } = React.useContext(h.context);

  const onKeyDown = React.useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      const keyElement = window.document.querySelector('#key') as HTMLInputElement;
      const listElement = window.document.querySelector('#list') as HTMLInputElement | undefined;

      const key = keyElement.value.replace(/^\s+|\s+$/g, '');
      const list = listElement?.value.replace(/^\s+|\s+$/g, '');

      if (key.length) {
        things.add(key, list ?? '-1');

        keyElement.value = '';
        listElement && (listElement.value = '');
      }
    }
  }, []);

  return (
    <div spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="key">
        What has to be done?
      </label>
      <input border="2" borderRadius="2" id="key" onKeyDown={onKeyDown} p="2" type="text" width="100" />
      <label cursor="pointer" display="flex" fontWeight="600" htmlFor="list" onClick={() => setA(!a)} spaceX="2">
        <div>{a ? '\u2191' : '\u2193'}</div>
        <div>List</div>
      </label>
      {a && <input border="2" borderRadius="2" id="list" onKeyDown={onKeyDown} p="2" type="text" width="100" />}
    </div>
  );
}

export default Input;
