import React from 'react';
import './Client.css';
import Input from './Input';

interface Thing {
  isDone: boolean;
  key: string;
}

function Client() {
  const [things, updateThings] = React.useState<Thing[]>([]);

  function onDelete(i: number) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();

      updateThings(things => {
        return things.filter((thing, j) => {
          return j !== i;
        });
      });
    };
  }

  function onDone(key: string) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      updateThings(things => {
        return things.map(thing => {
          if (thing.key === key) {
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
      const key: string = e.currentTarget.value;

      updateThings(things => {
        const newThing = { isDone: false, key };

        return [...things, newThing];
      });

      e.currentTarget.value = '';
    }
  }

  return (
    <div className="container" mX="auto">
      <div p="4" spaceY="4">
        <Input onKeyDown={onKeyDown} />
        <div spaceY="2">
          {things.map(({ isDone, key }, i) => (
            <div alignItems="center" cursor="pointer" display="flex" key={key} onClick={onDone(key)} spaceX="4">
              <div
                border="2"
                borderRadius="2"
                className={{ done: isDone }}
                fontWeight="600"
                lineHeight="1"
                opacity={isDone ? '100' : '50'}
                p="2"
              >
                {'\u2713'}
              </div>
              <div fontWeight={isDone && '600'}>{key}</div>
              <div fontWeight="600" lineHeight="1" mL="auto" onClick={onDelete(i)} p="2">
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
