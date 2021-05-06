import formatDistanceStrict from 'date-fns/formatDistanceStrict';

export function differenceInDays(initDate: Date, endDate: Date) :number {
  // date fns retuns n days/day, we just care about the number n
  let diff = formatDistanceStrict(endDate, initDate, { unit: 'day' }).split(" ");
  return parseInt(diff[0])
}