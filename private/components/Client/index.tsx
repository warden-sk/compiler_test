/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import * as helpers from '../../helpers';
import type { Thing } from '../../types';
import Input from '../Input';
import Lists from '../Lists';
import Things from '../Things';

function ExportImportButtons() {
  const exportToFile = helpers.exportThings();
  const importFromFile = helpers.importThings();

  return (
    <div>
      <div cursor="pointer" onClick={() => exportToFile()}>
        Export to file
      </div>
      <div cursor="pointer" onClick={() => importFromFile()}>
        Import from file
      </div>
    </div>
  );
}

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
        things: new helpers.Things(currentListName, setCurrentListName, setThings, things),
      }}
    >
      <div className="container" mX="auto" p="4">
        <div display="flex" flexDirection="column" spaceY="4">
          <ExportImportButtons />
          <Input />
          <div fontSize="9" fontWeight="600">
            Things
          </div>
          <Lists />
          <Things />
        </div>
      </div>
    </helpers.context.Provider>
  );
}

export default Client;
