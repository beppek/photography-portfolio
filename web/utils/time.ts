type TimeUnit = 'minute' | 'hour' | 'day';

const timeUnitCalculations = {
  minute: 60,
  hour: 60 * 60,
  day: 24 * 60 * 60,
};

export function getSecondsByTimeUnit(timeUnit: TimeUnit) {
  return timeUnitCalculations[timeUnit];
}
