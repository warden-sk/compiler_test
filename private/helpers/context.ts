/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type Things from './Things';

interface ThingsContext {
  things: Things;
}

interface Context extends ThingsContext {
  currentListName: string;
  setCurrentListName: React.Dispatch<React.SetStateAction<string>>;
}

const context = React.createContext<Context>({} as Context);

export default context;
