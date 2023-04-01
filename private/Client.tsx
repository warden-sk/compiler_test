import React from 'react';
import './Client.css';

interface Thing {
  input: string;
  isDone: boolean;
}

function Client() {
  const [things, updateThings] = React.useState<Thing[]>([]);

  function onDelete(input: string) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      updateThings(things => {
        return things.filter(thing => {
          return thing.input !== input;
        });
      });
    };
  }

  function onDone(input: string) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      updateThings(things => {
        return things.map(thing => {
          if (thing.input === input) {
            return { ...thing, isDone: !thing.isDone };
          } else {
            return thing;
          }
        });
      });
    };
  }

  function onKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      const input: string = e.currentTarget.value;

      updateThings(things => {
        const newThing = { input, isDone: false };

        return [...things, newThing];
      });

      e.currentTarget.value = '';
    }
  }

  return (
    <div className="container" mX="auto">
      <div p="4" spaceY="4">
        <input
          border="2"
          borderRadius="2"
          className="input"
          onKeyDown={onKeyDown}
          p="2"
          placeholder="What has to be done?"
          type="text"
          width="100"
        />
        <div spaceY="2">
          {things.map(({ input, isDone }) => (
            <div alignItems="center" cursor="pointer" display="flex" key={input} onClick={onDone(input)} spaceX="4">
              <div
                border="2"
                borderRadius="2"
                className={['done', `done_${isDone}`]}
                fontWeight="600"
                lineHeight="1"
                opacity={isDone ? '75' : '25'}
                p="2"
              >
                {'\u2713'}
              </div>
              <div fontWeight={isDone && '600'}>{input}</div>
              <div fontWeight="600" lineHeight="1" mL="auto" onClick={onDelete(input)} p="2">
                {'\u2717'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
