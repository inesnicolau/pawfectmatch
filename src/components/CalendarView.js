import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles.css'; // Import your CSS file for styles

const CalendarView = () => {
  const [date, setDate] = useState(new Date());

  return (
    <div class="main-container">
      <div className="calendar-view">
        <h2>My Experiences</h2>
        <Calendar value={date} onChange={setDate} className="custom-calendar" />
        <p className="selected-date">Selected date: {date.toDateString()}</p>
      </div>
      <div class="main-container"></div>
    </div>

  );
};

export default CalendarView;
