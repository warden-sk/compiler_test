import React from 'react';
import context from '../../helpers/context';
import decodeThings from '../../helpers/decodeThings';
import encodeThings from '../../helpers/encodeThings';
import type { Thing } from '../../types';
import Input from '../Input';
import Lists from '../Lists';
import Things from '../Things';
import './index.css';

function Client() {
  const [currentList, setCurrentList] = React.useState<string>('All');
  const [things, setThings] = React.useState<Thing[]>([]);

  React.useEffect(() => {
    const things = localStorage.getItem('things');

    if (things) {
      setThings(decodeThings(things));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('things', encodeThings(things));
  }, [encodeThings(things)]);

  return (
    <context.Provider value={{ currentList, setCurrentList, setThings, things }}>
      <div className="container" mX="auto" pX="4" pY="8">
        <div spaceY="4">
          <Lists />
          <Input />
          <Things />
        </div>
      </div>
    </context.Provider>
  );
}

export default Client;
