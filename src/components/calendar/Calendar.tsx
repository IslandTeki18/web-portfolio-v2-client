import * as React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";

type CalendarProps = {
  initialView: string;
  events: any[];
  headerToolbar: object;
  eventClick: () => void;
  dateClick: () => void;
  selectable: boolean;
};

const Calendar = (props: CalendarProps) => {
  return (
    <div className="dkCalendar">
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView={props.initialView}
        events={props.events}
        themeSystem="bootstrap5"
        headerToolbar={props.headerToolbar}
        eventClick={props.eventClick}
        selectable={props.selectable}
        dateClick={props.dateClick}
      />
    </div>
  );
};

Calendar.defaultProps = {
  initialView: "dayGridMonth",
  events: [],
  headerToolbar: {},
  selectable: false,
};

export default Calendar;
