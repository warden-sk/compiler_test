/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';
import type { Thing } from '../../types';
import Input from '../Input';
import Lists from '../Lists';
import Things from '../Things';
import './index.css';

function Client() {
  const [currentListName, setCurrentListName] = React.useState<string>('All');
  const [things, setThings] = React.useState<Thing[]>([]);

  React.useLayoutEffect(() => {
    const things = localStorage.getItem('things');

    if (things) {
      setThings(helpers.decodeThings(things));
    }
  }, []);

  React.useLayoutEffect(() => {
    localStorage.setItem('things', helpers.encodeThings(things));
  }, [helpers.encodeThings(things)]);

  return (
    <helpers.context.Provider
      value={{
        currentListName,
        setCurrentListName,
        things: new helpers.Things(currentListName, setThings, things),
      }}
    >
      <div className="container" mX="auto" p="4">
        <div display="flex" flexDirection="column" spaceY="4">
          <Lists />
          <Input />
          <div fontSize="9" fontWeight="600">
            Things
          </div>
          <Things />
        </div>
      </div>
    </helpers.context.Provider>
  );
}

export default Client;
