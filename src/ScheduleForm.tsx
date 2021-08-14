import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ScheduleGenerator from "./Schedule/ScheduleGenerator";
import Calendar from '@toast-ui/react-calendar';
// css
import 'tui-calendar/dist/tui-calendar.css';
import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import { ICalCalendar } from "ical-generator";

export default (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [displayCalendar, setDisplayCalendar] = useState(false);
  const [calendar, setCalendar] = useState(null);

  

  function getSchedule() :void {
    setCalendar(ScheduleGenerator.generateCalendar(startDate, endDate));
    setDisplayCalendar(true);
  }

  function fillCalendarProps() {
    
  }

  return (
    <div>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <br></br>
      <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
      <br></br>
      <button onClick={getSchedule} > Generate Calendar </button>
      { displayCalendar ?
        <Calendar
          isReadOnly={true}
          height="800px"
          month={{
            startDayOfWeek: 0
          }}
          calendars={[
            {
              id: '0',
              name: 'random-drawing',
              bgColor: '#9e5fff',
              borderColor: '#9e5fff'
            }
          ]}
          schedules={[
            {
              id: '1',
              calendarId: '0',
              title: 'TOAST UI Calendar Study',
              category: 'time',
              dueDateClass: '',
              start: startDate.toISOString(),
              end: endDate.toISOString()
            },
            {
              id: '2',
              calendarId: '0',
              title: 'Practice',
              category: 'milestone',
              dueDateClass: '',
              start: startDate.toISOString(),
              end: endDate.toISOString()
            }]}
        />
        :
        null
      }
    </div>

  );
};