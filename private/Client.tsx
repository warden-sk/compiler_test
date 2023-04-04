import React from 'react';
import './Client.css';
import context from './context';
import decodeThings from './helpers/decodeThings';
import encodeThings from './helpers/encodeThings';
import Input from './Input';
import Thing from './Thing';

export interface ThingType {
  isDone: boolean;
  key: string;
}

function Client() {
  const [things, setThings] = React.useState<ThingType[]>([]);

  React.useEffect(() => {
    const things = localStorage.getItem('things');

    if (things) {
      setThings(decodeThings(things));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('things', encodeThings(things));
  }, [encodeThings(things)]);

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

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

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

  return (
    <context.Provider value={{ setThings, things }}>
      <div className="container" mX="auto">
        <div p="4" spaceY="4">
          <Input onKeyDown={onKeyDown} />
          <div spaceY="2">
            {things.map((thing, i) => (
              <Thing i={i} key={thing.key} thing={thing} />
            ))}
          </div>
        </div>
      </div>
    </context.Provider>
  );
}

export default Client;
