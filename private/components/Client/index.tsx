/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as h from '../../helpers';
import type { Thing } from '../../types';
import Input from '../Input';
import Lists from '../Lists';
import Things from '../Things';
import ExportButton from './ExportButton';
import ImportButton from './ImportButton';
import './index.css';

function Client() {
  const [currentListName, setCurrentListName] = React.useState<string>('All');
  const [things, setThings] = React.useState<Thing[]>([]);

  React.useEffect(() => {
    const things = localStorage.getItem('things');

    if (things) {
      setThings(h.decodeThings(things));
    }
  }, []);

  React.useEffect(() => {
    localStorage.setItem('things', h.encodeThings(things));
  }, [h.encodeThings(things)]);

  return (
    <h.context.Provider
      value={{
        currentListName,
        setCurrentListName,
        setThings,
        things: new h.Things(currentListName, setThings, things),
      }}
    >
      <div className="container" height="100" mX="auto" p="4">
        <div display="flex" flexDirection="column" height="100" spaceY="4">
          <Lists />
          <Input />
          <ExportButton />
          <ImportButton />
          <div fontSize="9" fontWeight="600">
            Things
          </div>
          <Things />
        </div>
      </div>
    </h.context.Provider>
  );
}

export default Client;
