import React from 'react';
import context from './context';

function Input() {
  const { setThings } = React.useContext(context);

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const key = e.currentTarget.value;

      setThings(things => {
        const newThing = { isDone: false, key };

        return [...things, newThing];
      });

      e.currentTarget.value = '';
    }
  }

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
