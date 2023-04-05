import React from 'react';
import context from '../../helpers/context';
import decodeThings from '../../helpers/decodeThings';
import encodeThings from '../../helpers/encodeThings';
import useFilteredThings from '../../helpers/useFilteredThings';
import type { Thing } from '../../types';
import Input from '../Input';
import Things from '../Things';
import './index.css';

function Lists() {
  const { setCurrentList } = React.useContext(context);

  return (
    <div spaceY="2">
      <label cursor="pointer" display="block" fontWeight="600" htmlFor="lists">
        Lists
      </label>
      <div alignItems="center" border="2" borderRadius="2" className="lists" display="flex">
        <div p="2">↓</div>
        <select border="0" id="lists" onInput={e => setCurrentList(e.currentTarget.value)} p="2" width="100">
          {['All', 'Done', 'Not done'].map(list => {
            const filteredThings = useFilteredThings(list);

            return (
              <option key={list} value={list}>
                {list} ({filteredThings.length})
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
}

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
