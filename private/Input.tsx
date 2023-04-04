/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';

interface P {
  onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

function Input({ onKeyDown }: P) {
  return (
    <div>
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="input" mB="2">
        What has to be done?
      </label>
      <input border="2" borderRadius="2" id="input" onKeyDown={onKeyDown} p="2" type="text" width="100" />
    </div>
  );
}

export default Input;
