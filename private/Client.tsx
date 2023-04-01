import React from 'react';
import './Client.css';

interface Thing {
  input: string;
  isDone: boolean;
}

function Client() {
  const [things, updateThings] = React.useState<Thing[]>([]);

  function done(inputThing: string) {
    updateThings(things =>
      things.map(thing => (thing.input === inputThing ? { ...thing, isDone: !thing.isDone } : thing))
    );
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const thing: string = e.currentTarget.value;

      updateThings(things => [...things, { input: thing, isDone: false }]);

      e.currentTarget.value = '';
    }
  }

  return (
    <div p="4" spaceY="4">
      <input border="1" onKeyDown={onKeyDown} p="2" type="text" width="100" />
      <div spaceY="2">
        {things.map(({ input, isDone }) => (
          <div alignItems="center" cursor="pointer" display="flex" key={input} onClick={() => done(input)} spaceX="4">
            <div border="1" borderRadius="50" className={isDone && 'done'} p="4" />
            <div>{input}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Client;
