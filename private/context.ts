import React from 'react';
import type { ThingType } from './Client';

interface Context {
  setThings: React.Dispatch<React.SetStateAction<ThingType[]>>;
  things: ThingType[];
}

const context = React.createContext<Context>({} as Context);

export default context;
