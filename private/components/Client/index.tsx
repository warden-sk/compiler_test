import React from 'react';
import context from '../../helpers/context';
import decodeThings from '../../helpers/decodeThings';
import encodeThings from '../../helpers/encodeThings';
import type { Thing } from '../../types';
import Input from '../Input';
import Things from '../Things';
import './index.css';

function Client() {
  const [list, setList] = React.useState<string>('All');
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
      <div className="container" mX="auto" pX="4" pY="8">
        <div spaceY="4">
          <label cursor="pointer" display="block" fontWeight="600" htmlFor="lists" mB="2">
            Lists
          </label>
          <div alignItems="center" border="2" borderRadius="2" className="lists" display="flex">
            <div p="2">↓</div>
            <select border="0" id="lists" onInput={e => setList(e.currentTarget.value)} p="2" width="100">
              {['All', 'Done', 'Not done'].map(option => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <Input />
          <Things list={list} />
        </div>
      </div>
    </context.Provider>
  );
}

export default Client;
