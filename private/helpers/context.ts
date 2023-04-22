/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type Things from './Things';

interface Context {
  currentListName: string;
  setCurrentListName: React.Dispatch<React.SetStateAction<string>>;
  things: Things;
}

const context = React.createContext<Context>({} as Context);

export default context;
