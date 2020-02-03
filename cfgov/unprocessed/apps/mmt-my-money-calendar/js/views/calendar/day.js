import clsx from 'clsx';
import { useCallback } from 'react';
import { observer } from 'mobx-react';
import { DateTime } from 'luxon';
import { useStore } from '../../stores';
import { formatCurrency } from '../../lib/currency-helpers';
import { compact } from '../../lib/array-helpers';

function Day({ day, dateFormat = 'd' }) {
  const { uiStore, eventStore } = useStore();

  const handleClick = useCallback(
    (evt) => {
      evt.preventDefault();

      uiStore.selectedDate && day.equals(uiStore.selectedDate)
        ? uiStore.clearSelectedDate()
        : uiStore.setSelectedDate(day);
    },
    [day]
  );

  const balance = eventStore.getBalanceForDate(day);

  const classes = clsx('calendar__day', {
    today: day.hasSame(DateTime.local(), 'day'),
    selected: uiStore.selectedDate && day.hasSame(uiStore.selectedDate, 'day'),
    'current-month': day.hasSame(uiStore.currentMonth, 'month'),
    'pos-balance': balance > 0,
    'neg-balance': balance < 0,
  });

  const symbols = compact([
    eventStore.dateHasIncome(day) && '+',
    eventStore.dateHasExpenses(day) && '-',
  ]);

  return (
    <div className={classes} role="button" onClick={handleClick}>
      <div className="calendar__day-number">
        <time dateTime={day.toFormat('y-MM-dd')} className="calendar__day-datetime">
          {day.toFormat(dateFormat)}
        </time>
      </div>
      <div className="calendar__day-symbols">{symbols}</div>
    </div>
  );
}

export default observer(Day);