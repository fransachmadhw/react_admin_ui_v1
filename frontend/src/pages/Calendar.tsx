// import React from 'react';

import CalendarBox from '../components/calendar/CalendarBox';

const Calendar = () => {
  return (
    // screen
    <div className="w-full p-0 m-0">
      {/* container */}
      <div className="w-full flex flex-col items-stretch gap-5 xl:gap-8">
        {/* heading */}
        <h2 className="font-bold text-2xl xl:text-4xl mt-0 pt-0 text-base-content dark:text-neutral-200">
          Calendar
        </h2>
        {/* calendar container */}
        <div className="w-full p-0 m-0 relative">
          <CalendarBox />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
