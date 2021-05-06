import randomWords from 'random-words';
import ics from 'ics';
import { differenceInDays } from '../utils/helpers'

export default class ScheduleGenerator {




  static generateCalendar = (initDate: Date, endDate: Date): void => {
    let days = 1; // same init and end
    if(initDate !== endDate) { // more days
      days += differenceInDays(endDate, initDate);
    }
    const topics = randomWords(days);
  } 
}