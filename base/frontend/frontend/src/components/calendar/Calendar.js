import React, { useState } from "react";
import Calendar from "react-calendar";

const Calendar = () => {
  return (
    <>
      <div>
        <Calendar
          onChange={props.clickDate}
          // value={props.date}
          calendarType="US"
        />
      </div>
    </>
  );
};

export default Calendar;
