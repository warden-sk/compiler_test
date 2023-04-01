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
      const input: string = e.currentTarget.value;

      updateThings(things => [...things, { input, isDone: false }]);

      e.currentTarget.value = '';
    }
  }

  return (
    <div className="container" mX="auto">
      <div p="4" spaceY="4">
        <input
          border="1"
          borderRadius="2"
          onKeyDown={onKeyDown}
          p="2"
          placeholder="What has to be done?"
          type="text"
          width="100"
        />
        <div spaceY="2">
          {things.map(({ input, isDone }) => (
            <div alignItems="center" cursor="pointer" display="flex" key={input} onClick={() => done(input)} spaceX="4">
              <div border="1" borderRadius="2" className={isDone && 'done'} fontWeight="600" lineHeight="1" p="2">
                {'\u2713'}
              </div>
              <div fontWeight={isDone && '600'}>{input}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
