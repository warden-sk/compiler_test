/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import context from '../../helpers/context';
import decodeThings from '../../helpers/decodeThings';
import encodeThings from '../../helpers/encodeThings';
import Calendar from '../../test/Calendar';
import EnhancedDate from '../../test/helpers/EnhancedDate';
import type { Thing } from '../../types';
import Input from '../Input';
import Lists from '../Lists';
import Things from '../Things';
import './index.css';

function Client() {
  const [currentList, setCurrentList] = React.useState<string>('All');
  const [things, setThings] = React.useState<Thing[]>([]);

  const date1st = React.useState<EnhancedDate>(new EnhancedDate().date());
  const date2nd = React.useState<EnhancedDate | undefined>(new EnhancedDate(2023, 11, 31).date());

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
          <Calendar count={1} date1st={date1st} date2nd={date2nd} />
          <Lists />
          <Input />
          <div fontSize="8" fontWeight="600">
            Things
          </div>
          <Things />
          <div fontSize="2" opacity="50" textAlign="center">
            Copyright 2023 Marek Kobida
          </div>
        </div>
      </div>
    </context.Provider>
  );
}

export default Client;
