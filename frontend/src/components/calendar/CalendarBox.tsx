import React from 'react';
import {
  EventApi,
  DateSelectArg,
  EventClickArg,
  EventContentArg,
  formatDate,
} from '@fullcalendar/core';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
// import listPlugin from '@fullcalendar/list';
import { INITIAL_EVENTS, createEventId } from './CalendarUtils';

// interface CalendarBoxProps {
//   weekendsVisible: boolean;
//   currentEvents: EventApi[];
// }

const CalendarBox: React.FC = () => {
  const [currentEvents, setCurrentEvents] = React.useState<
    EventApi[]
  >([]);

  const handleDateSelect = (selectInfo: DateSelectArg) => {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      });
    }
  };

  const handleEventClick = (clickInfo: EventClickArg) => {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}'`
      )
    ) {
      clickInfo.event.remove();
    }
  };

  const handleEvents = (events: EventApi[]) => {
    setCurrentEvents(events);
  };

  const renderEventContent = (eventContent: EventContentArg) => {
    return (
      <div className="mx-1 flex gap-1 text-ellipsis overflow-hidden">
        <b>{eventContent.timeText}</b>
        <i>{eventContent.event.title}</i>
      </div>
    );
  };

  const renderSidebarEvent = (event: EventApi) => {
    return (
      <div
        className="w-full flex flex-col items-start gap-3 p-3 bg-base-200 dark:bg-neutral dark:text-neutral-content rounded-lg"
        key={event.id}
      >
        <div className="flex flex-wrap gap-2">
          <b>
            {formatDate(event.start!, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </b>
          {event.end && (
            <div className="whitespace-nowrap">until</div>
          )}
          <b>
            {formatDate(event.end!, {
              year: 'numeric',
              month: 'short',
              day: 'numeric',
            })}
          </b>
        </div>
        <div>{event.title}</div>
      </div>
    );
  };

  return (
    <div className="w-full flex flex-col xl:flex-row gap-5 xl:gap-0">
      {/* sidebar */}
      <div className="xl:w-[200px] 2xl:w-[250px] flex flex-col items-start xl:mr-4 gap-4">
        {/* heading */}
        <h3>Events</h3>
        <div className="hidden xl:flex w-full flex-col items-start gap-3">
          {currentEvents.map(renderSidebarEvent)}
        </div>
        <div className="carousel w-full xl:hidden rounded-lg gap-3">
          {currentEvents.map((event) => (
            <div
              className="carousel-item flex-col items-start gap-3 p-3 bg-base-200 dark:bg-neutral dark:text-neutral-content rounded-lg"
              key={event.id}
            >
              <div className="flex flex-wrap gap-2">
                <b>
                  {formatDate(event.start!, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </b>
                {event.end && (
                  <div className="whitespace-nowrap">until</div>
                )}
                <b>
                  {formatDate(event.end!, {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </b>
              </div>
              <div className="line-clamp-1">{event.title}</div>
            </div>
          ))}
        </div>
      </div>

      {/* calendar */}
      <div className="grow h-[85vh] xl:h-auto 3xl:h-[80vh]">
        <FullCalendar
          height="100%"
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          // headerToolbar={{
          //   left: 'prev,next today',
          //   center: 'title',
          //   right: 'dayGridMonth,timeGridWeek,timeGridDay',
          // }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} // called after events are initialized/added/changed/removed
          /* you can update a remote database when these fire:
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
        />
      </div>
    </div>
  );
};

export default CalendarBox;
