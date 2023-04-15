/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import createArrayOf from '../helpers/createArrayOf';
import EnhancedDate from '../helpers/EnhancedDate';
import useState from '../helpers/useState';
import type { CalendarContext } from './calendarContext';
import calendarContext from './calendarContext';
import CalendarDay from './CalendarDay';
import { DAYS, MONTHS } from './constants';
import './index.css';

interface P extends EnhancedJSXElement<'div'> {
  count: number;
  date1st: [EnhancedDate, React.Dispatch<React.SetStateAction<EnhancedDate>>];
  date2nd: [EnhancedDate, React.Dispatch<React.SetStateAction<EnhancedDate>>];
}

interface Test {
  AFTER: number[];
  BEFORE: number[];
  DAYS_IN_CURRENT_MONTH: number;
  DAYS_IN_PREVIOUS_MONTH: number;
  FIRST_DAY_IN_CURRENT_MONTH: number;
}

function test(date: EnhancedDate): Test {
  const DAYS_IN_CURRENT_MONTH = date.getDaysInMonth(); // January 2023 has 31 days
  const DAYS_IN_PREVIOUS_MONTH = date.getDaysInMonth(-1); // December 2023 has 31 days

  let FIRST_DAY_IN_CURRENT_MONTH = new EnhancedDate(date.getFullYear(), date.getMonth(), 1).getDay(); // Sunday (7)
  // Sunday from 0 to 7
  FIRST_DAY_IN_CURRENT_MONTH = FIRST_DAY_IN_CURRENT_MONTH === 0 ? 7 : FIRST_DAY_IN_CURRENT_MONTH;

  let LAST_DAY_IN_CURRENT_MONTH = new EnhancedDate(date.getFullYear(), date.getMonth() + 1, 0).getDay(); // Tuesday (2)
  // Sunday from 0 to 7
  LAST_DAY_IN_CURRENT_MONTH = LAST_DAY_IN_CURRENT_MONTH === 0 ? 7 : LAST_DAY_IN_CURRENT_MONTH;

  const BEFORE = createArrayOf(DAYS_IN_PREVIOUS_MONTH).filter(
    i => i > DAYS_IN_PREVIOUS_MONTH - (FIRST_DAY_IN_CURRENT_MONTH - 1)
  ); // 6 days before

  const AFTER = createArrayOf(7 - LAST_DAY_IN_CURRENT_MONTH); // 5 days after

  return {
    AFTER,
    BEFORE,
    DAYS_IN_CURRENT_MONTH,
    DAYS_IN_PREVIOUS_MONTH,
    FIRST_DAY_IN_CURRENT_MONTH,
  };
}

function Calendar({ count, date1st, date2nd }: P) {
  const [state, setState] = useState<CalendarContext['state']>({ date: date1st[0], whichToMove: 1 });

  function $(date: EnhancedDate) {
    if (+date >= +new EnhancedDate().date()) {
      if (state.whichToMove === 1) {
        // if (+date < +date2nd[0]) {
        date1st[1](date);
        date2nd[1](new EnhancedDate(2024, 11, 31).date());

        setState({ whichToMove: 2 });
        // }
      }

      if (state.whichToMove === 2) {
        if (+date > +date1st[0]) {
          date2nd[1](date);

          setState({ whichToMove: 1 });
        }
      }
    }
  }

  function onLeft() {
    setState({ date: state.date.moveLeft() });
  }

  function onRight() {
    setState({ date: state.date.moveRight() });
  }

  // dokončiť
  const monthOfDate1st = new Date().getMonth();
  const monthOfDate2nd = new Date(1703977200000).getMonth();

  const diff = monthOfDate2nd - monthOfDate1st + 1;

  return (
    <calendarContext.Provider value={{ date1st, date2nd, setState, state }}>
      <div className="Calendar" textAlign="center">
        <div display={{ '###': 'none' }}>
          {createArrayOf(diff).map(i => {
            const d = state.date.addMonths(i - 1, state.date.getDate());

            const { AFTER, BEFORE, DAYS_IN_CURRENT_MONTH } = test(d);

            return (
              <div key={i} p="2">
                <div alignItems="center" display="flex">
                  <div fontSize="4" fontWeight="600" mX="auto">
                    {MONTHS[d.getMonth()]} {d.getFullYear()}
                  </div>
                </div>
                <div display="grid" style={{ gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' }}>
                  {DAYS.map(day => (
                    <div className="Calendar__day" key={day}>
                      <div
                        alignItems="center"
                        className="Calendar__day__i"
                        display="flex"
                        fontWeight="600"
                        height="100"
                        justifyContent="center"
                        width="100"
                      >
                        {day}
                      </div>
                    </div>
                  ))}
                  {BEFORE.map(j => (
                    <CalendarDay date={d.addMonths(-1, j)} key={j} opacity="25" updateDate={$} />
                  ))}
                  {createArrayOf(DAYS_IN_CURRENT_MONTH).map(j => (
                    <CalendarDay date={new EnhancedDate(d).addMonths(0, j)} key={j} updateDate={$} />
                  ))}
                  {AFTER.map(j => (
                    <CalendarDay date={d.addMonths(1, j)} key={j} opacity="25" updateDate={$} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        <div display={['none', { '###': 'flex' }]}>
          {createArrayOf(count).map(i => {
            const d = state.date.addMonths(i - 1, state.date.getDate());

            const { AFTER, BEFORE, DAYS_IN_CURRENT_MONTH } = test(d);

            return (
              <div key={i} p="2" width={['100', { '#': `${12 / count}/12` }]}>
                <div alignItems="center" display="flex">
                  {i === 1 && (
                    <div cursor="pointer" onClick={() => onLeft()}>
                      {'\u2190'} dozadu
                    </div>
                  )}
                  <div fontSize="4" fontWeight="600" mX="auto">
                    {MONTHS[d.getMonth()]} {d.getFullYear()}
                  </div>
                  {i === count && (
                    <div cursor="pointer" onClick={() => onRight()}>
                      dopredu {'\u2192'}
                    </div>
                  )}
                </div>
                <div display="grid" style={{ gridTemplateColumns: 'repeat(7, minmax(0, 1fr))' }}>
                  {DAYS.map(day => (
                    <div className="Calendar__day" key={day}>
                      <div
                        alignItems="center"
                        className="Calendar__day__i"
                        display="flex"
                        fontWeight="600"
                        height="100"
                        justifyContent="center"
                        width="100"
                      >
                        {day}
                      </div>
                    </div>
                  ))}
                  {BEFORE.map(j => (
                    <CalendarDay date={d.addMonths(-1, j)} key={j} opacity="25" updateDate={$} />
                  ))}
                  {createArrayOf(DAYS_IN_CURRENT_MONTH).map(j => (
                    <CalendarDay date={new EnhancedDate(d).addMonths(0, j)} key={j} updateDate={$} />
                  ))}
                  {AFTER.map(j => (
                    <CalendarDay date={d.addMonths(1, j)} key={j} opacity="25" updateDate={$} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </calendarContext.Provider>
  );
}

export default Calendar;
