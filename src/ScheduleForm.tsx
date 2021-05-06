import React, { useState } from "react";
import DatePicker from "react-datepicker";
import ScheduleGenerator from "./Schedule/ScheduleGenerator"

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default (): JSX.Element => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  function getSchedule() :void {
    ScheduleGenerator.generateCalendar(startDate, endDate);
  }

  return (
    <div>
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
      <br></br>
      <DatePicker selected={endDate} onChange={date => setEndDate(date)} />
      <br></br>
      <button onClick={getSchedule} > Generate Calendar </button>
    </div>

  );
};