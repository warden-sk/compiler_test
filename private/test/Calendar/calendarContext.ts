/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import type EnhancedDate from '../helpers/EnhancedDate';
import type { EnhancedSetState } from '../helpers/useState';

export interface CalendarContext {
  date1st: [EnhancedDate, React.Dispatch<React.SetStateAction<EnhancedDate>>];
  date2nd: [EnhancedDate, React.Dispatch<React.SetStateAction<EnhancedDate>>];
  setState: EnhancedSetState<CalendarContext['state']>;
  state: { date: EnhancedDate; whichToMove: number };
}

const calendarContext = React.createContext<CalendarContext>({} as CalendarContext);

export default calendarContext;
