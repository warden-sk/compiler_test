/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../../helpers/context';
import decodeThings from '../../helpers/decodeThings';
import encodeThings from '../../helpers/encodeThings';
import Things from '../../helpers/Things';
import type { Thing } from '../../types';
import Input from '../Input';
import Lists from '../Lists';
import ThingsComponent from '../Things';
import './index.css';

function Client() {
  const [currentListName, setCurrentListName] = React.useState<string>('All');
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
    <context.Provider
      value={{
        currentListName,
        setCurrentListName,
        things: new Things(setThings, things),
      }}
    >
      <div className="container" height="100" mX="auto" p="4">
        <div display="flex" flexDirection="column" height="100" spaceY="4">
          <Lists />
          <Input />
          <div fontSize="9" fontWeight="600">
            Things
          </div>
          <ThingsComponent />
        </div>
      </div>
    </context.Provider>
  );
}

export default Client;
