/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type EnhancedThings from './EnhancedThings';

interface ThingsContext {
  things: EnhancedThings;
}

interface Context extends ThingsContext {
  currentListName: string;
  setCurrentListName: React.Dispatch<React.SetStateAction<string>>;
}

const context = React.createContext<Context>({} as Context);

export default context;
