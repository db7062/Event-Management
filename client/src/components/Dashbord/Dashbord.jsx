import React, { useState } from "react";
import "./Dashbord.css";
import Calendar from "../Others/Calander/Calander";

export default function Dashbord() {
  const [approvedDates, setApprovedDates] = useState([]);

  const notices = [
    { date: new Date("2023-08-07"), notice: "Fan meet Up -Bhuvaneshwar" },
    { date: new Date("2023-08-10"), notice: "College Concert-KIIT" },
    { date: new Date("2023-09-10"), notice: "Music Concert-Kolkata" },
  ];

  const handleApprovedDates = (date) => {
    setApprovedDates((prevApprovedDates) => [...prevApprovedDates, date]);
  };

  return (
    <div className="dashboard">
      <div className="container container1">
        <Calendar notices={notices} onApprove={handleApprovedDates} />
      </div>
      <div className="container container2">
        <div className="upcoming-events">
          <div className="heading">
            <h2>Upcoming Events</h2>
          </div>

          {approvedDates.map((date, index) => (
            <div key={index} className="event">
              {date.toDateString()} -{" "}
              {
                notices.find(
                  (notice) => notice.date.toDateString() === date.toDateString()
                ).notice
              }
            </div>
          ))}
        </div>
      </div>
      <div className="container container3">Container 3</div>
    </div>
  );
}
