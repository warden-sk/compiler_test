import React from 'react';
import './Client.css';
import decodeThings from './helpers/decodeThings';
import encodeThings from './helpers/encodeThings';
import Input from './Input';
import Thing from './Thing';

export interface ThingType {
  isDone: boolean;
  key: string;
}

function Client() {
  const [currentThingI, setCurrentThingI] = React.useState<number>();
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
      const key: string = e.currentTarget.value;

      setThings(things => {
        const newThing = { isDone: false, key };

        return [...things, newThing];
      });

      e.currentTarget.value = '';
    }
  }

  /* ———————————————————————————————————————————————————————————————————————————————————————————————————————————————— */

  return (
    <div className="container" mX="auto">
      <div p="4" spaceY="4">
        <Input onKeyDown={onKeyDown} />
        <div spaceY="2">
          {things.map((thing, i) => (
            <Thing
              currentThingI={currentThingI}
              i={i}
              key={i}
              setCurrentThingI={setCurrentThingI}
              setThings={setThings}
              thing={thing}
              things={things}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Client;
