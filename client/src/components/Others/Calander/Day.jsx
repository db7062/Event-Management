import React from "react";

class Day extends React.Component {
  render() {
    const { date, notice, onApprove, onDecline } = this.props;

    return (
      <div className={`day${notice ? " notice" : ""}`}>
        <div className="date">{date.getDate()}</div>
        {notice && (
          <div className="notice-box">
            <div className="notice-text">{notice.notice}</div>
            <div className="notice-actions">
              <span className="approve" onClick={onApprove}>
                ✔️
              </span>
              <span className="decline" onClick={onDecline}>
                ❌
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Day;
