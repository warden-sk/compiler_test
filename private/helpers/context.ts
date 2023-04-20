/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type { Thing } from '../types';
import type EnhancedThings from './EnhancedThings';

interface ThingsContext {
  setThings: React.Dispatch<React.SetStateAction<Thing[]>>;
  things: EnhancedThings;
}

interface Context extends ThingsContext {
  currentListName: string;
  setCurrentListName: React.Dispatch<React.SetStateAction<string>>;
}

const context = React.createContext<Context>({} as Context);

export default context;
