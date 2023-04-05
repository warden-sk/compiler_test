import React from 'react';
import context from '../../helpers/context';
import decodeThings from '../../helpers/decodeThings';
import encodeThings from '../../helpers/encodeThings';
import Things from '../Things';
import './Client.css';

export interface ThingType {
  createdAt: Date;
  isDone: boolean;
  key: string;
}

function Client() {
  const [things, setThings] = React.useState<ThingType[]>([]);

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
      <Things />
    </context.Provider>
  );
}

export default Client;
