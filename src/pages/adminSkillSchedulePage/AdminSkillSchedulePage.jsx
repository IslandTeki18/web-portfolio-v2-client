import React from "react";
import Calendar from "../../components/atoms/calendar/Calendar";
import "./AdminSkillSchedulePage.scss";

const AdminSkillSchedulePage = () => {
  const dummyEvents = [
    { title: "Test Event One", start: "2022-05-03", end: "2022-05-04" },
    { title: "Test Event Two", start: "2022-05-03", end: "2022-05-04" },
    { title: "Test Event Three", start: "2022-05-03" },
  ];

  return (
    <div className="dkAdminSkillSchedulePage">
      <div className="container py-3">
        <div className="col-12">
          <Calendar
            dateClick={(info) => {
              alert("Clicked on: " + info.dateStr);
            }}
            events={dummyEvents}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminSkillSchedulePage;
