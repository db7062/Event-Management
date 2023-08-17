import React from "react";
import "./Dashbord.css";
import Calendar from "../Others/Calander/Calander";

export default function Dashbord() {
  const notices = [
    { date: new Date("2023-08-07"), notice: "Meeting at 3pm" },
    { date: new Date("2023-08-10"), notice: "Team lunch" },
    // Add more notices here...
  ];

  return (
    <div className="dashboard">
      <div className="container container1">
        <Calendar notices={notices} /> {/* Pass the notices */}
      </div>
      <div className="container container2">Container 2</div>
      <div className="container container3">Container 3</div>
    </div>
  );
}
