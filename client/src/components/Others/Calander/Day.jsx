import React from "react";
import "./Day.css";

class Day extends React.Component {
  render() {
    const { date, notice, onApprove, onDecline } = this.props;
    const day = date.getDate();
    const dayOfWeek = date.toLocaleString("en-US", { weekday: "short" });

    return (
      <div className="day">
        <div className="date">{day}</div>
        {notice ? (
          <div className="notice-dot"></div>
        ) : (
          <div className="day-of-week">{dayOfWeek}</div>
        )}
        <div className="notice-box">
          {notice && (
            <React.Fragment>
              <p>{notice.notice}</p>
              <div className="notice-actions">
                <button className="approve" onClick={() => onApprove(notice)}>
                  ✔️
                </button>
                <button className="decline" onClick={() => onDecline(notice)}>
                  ❌
                </button>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Day;
