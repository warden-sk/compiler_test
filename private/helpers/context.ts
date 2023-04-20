/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type { Thing } from '../types';
import type Things from './Things';

interface ThingsContext {
  setThings: React.Dispatch<React.SetStateAction<Thing[]>>;
  things: Things;
}

interface Context extends ThingsContext {
  currentListName: string;
  setCurrentListName: React.Dispatch<React.SetStateAction<string>>;
}

const context = React.createContext<Context>({} as Context);

export default context;
