import randomWords from 'random-words';
import { eachDayOfInterval } from 'date-fns';
import ical, { ICalCalendar } from 'ical-generator';  

export default class ScheduleGenerator {

  static generateCalendar = (initDate: Date, endDate: Date): ICalCalendar => {
    let days = [initDate]; // same init and end
    if(initDate !== endDate) { // more days
      days = eachDayOfInterval({start: initDate, end: endDate});
    }
    const topics = randomWords(days.length);

    const calendar = ical({ name: 'Random drawing ideas' });
    topics.map((topic: string, i: number) => {
      calendar.createEvent({
        start: days[i],
        end: days[i],
        summary: `Draw something related to ${topic}`,
        description:`Draw something related to ${topic}`
      });
    });
    return calendar;
  }
}