import React from 'react';
import type { ThingType } from '../components/Client';

interface ThingsContext {
  setThings: React.Dispatch<React.SetStateAction<ThingType[]>>;
  things: ThingType[];
}

interface Context extends ThingsContext {}

const context = React.createContext<Context>({} as Context);

export default context;
