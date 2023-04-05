import React from 'react';
import context from '../../helpers/context';
import decodeThings from '../../helpers/decodeThings';
import encodeThings from '../../helpers/encodeThings';
import type { Thing } from '../../types';
import Input from '../Input';
import Things from '../Things';
import './index.css';

function Client() {
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
    <context.Provider value={{ setThings, things }}>
      <div className="container" mX="auto">
        <div p="4" spaceY="4">
          <div alignItems="center" border="2" borderRadius="2" className="lists" display="flex">
            <div p="2">↓</div>
            <select border="0" p="2" width="100">
              <option>Všetky</option>
            </select>
          </div>
          <Input />
          <Things />
        </div>
      </div>
    </context.Provider>
  );
}

export default Client;
