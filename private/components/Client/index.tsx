/*
 * Copyright 2023 Marek Kobida
 */

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
      <div className="container" height="100" mX="auto" p="4">
        <div display="flex" flexDirection="column" height="100" spaceY="4">
          <Lists />
          <Input />
          <Things />
          <div alignItems="center" display="flex" fontSize="2" justifyContent="center" opacity="50" spaceX="2">
            <div>Copyright 2023 Marek Kobida</div>
            <div cursor="pointer" onClick={() => window.document.body.classList.toggle('🌙')}>
              🌙
            </div>
          </div>
        </div>
      </div>
    </context.Provider>
  );
}

export default Client;
