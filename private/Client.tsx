import React from 'react';
import './Client.css';
import decodeThings from './helpers/decodeThings';
import encodeThings from './helpers/encodeThings';
import Input from './Input';

export interface Thing {
  isDone: boolean;
  key: string;
}

function Client() {
  const [things, updateThings] = React.useState<Thing[]>([]);

  React.useEffect(() => {
    const things = localStorage.getItem('things');

    if (things) {
      updateThings(decodeThings(things));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('things', encodeThings(things));
  }, [encodeThings(things)]);

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

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

  function onDone(i: number) {
    return (e: React.MouseEvent<HTMLDivElement>) => {
      updateThings(things => {
        return things.map((thing, j) => {
          if (j === i) {
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
            <div
              alignItems="center"
              className={{ done: isDone }}
              cursor="pointer"
              display="flex"
              key={key}
              onClick={onDone(i)}
              spaceX="4"
            >
              <div
                border="2"
                borderRadius="2"
                fontWeight={isDone && '600'}
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
