import React from 'react';
import type { Thing } from '../types';

interface ThingsContext {
  setThings: React.Dispatch<React.SetStateAction<Thing[]>>;
  things: Thing[];
}

interface Context extends ThingsContext {}

const context = React.createContext<Context>({} as Context);

export default context;
