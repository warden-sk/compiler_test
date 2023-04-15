/*
 * Copyright 2023 Marek Kobida
 */

import React from 'react';
import EnhancedDate from '../helpers/EnhancedDate';
import calendarContext from './calendarContext';
import './CalendarDay.css';

interface P extends EnhancedJSXElement<'div'> {
  date: EnhancedDate;
  updateDate: (date: EnhancedDate) => void;
}

function CalendarDay({ className, date, updateDate, ...$ }: P) {
  const { date1st, date2nd, state } = React.useContext(calendarContext);

  const is1st = +date === +date1st[0];
  const is2nd = +date === +date2nd[0];

  const isBetween = +date > +date1st[0] && +date < +date2nd[0];

  const isCurrent = (is1st && state.whichToMove === 1) || (is2nd && state.whichToMove === 2);

  const is2ndDefault = +date2nd[0] === +new EnhancedDate(2024, 11, 31).date();

  return (
    <div
      {...$}
      className={[
        className,
        'Calendar__day',
        {
          Calendar__day_1st: is1st,
          Calendar__day_2nd: is2nd,
          Calendar__day_2ndDefault: is2ndDefault,
          Calendar__day_between: !is2ndDefault && isBetween,
        },
      ]}
      opacity={+date < +new EnhancedDate().date() && '25'}
    >
      <div
        alignItems="center"
        borderRadius={(is1st || is2nd) && '50'}
        className="Calendar__day__i"
        cursor="pointer"
        display="flex"
        flexDirection="column"
        fontWeight={isCurrent && '600'}
        height="100"
        justifyContent="center"
        onClick={() => updateDate(date)}
        width="100"
      >
        {date.getDate()}
      </div>
    </div>
  );
}

export default CalendarDay;
