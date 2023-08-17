import React from "react";
import Day from "./Day";
import CustomDropdown from "../CustomDropdown/CustomDropdown";
import "./Calander.css";

class Calendar extends React.Component {
  state = {
    selectedMonth: new Date().getMonth(),
    selectedYear: new Date().getFullYear(),
    notices: this.props.notices,
    popupNotice: null,
  };

  handleMonthChange = (event) => {
    this.setState({ selectedMonth: parseInt(event.target.value) });
  };

  handleYearChange = (event) => {
    this.setState({ selectedYear: parseInt(event.target.value) });
  };

  handleApprove = (notice) => {
    if (window.confirm(`Approve notice: ${notice.notice}`)) {
      const updatedNotices = this.state.notices.filter(
        (item) => item !== notice
      );
      this.setState({ notices: updatedNotices, popupNotice: null });
    }
  };

  handleDecline = (notice) => {
    if (window.confirm(`Decline notice: ${notice.notice}`)) {
      const updatedNotices = this.state.notices.filter(
        (item) => item !== notice
      );
      this.setState({ notices: updatedNotices, popupNotice: null });
    }
  };

  render() {
    const { selectedMonth, selectedYear, notices, popupNotice } = this.state;
    const daysInMonth = new Date(selectedYear, selectedMonth + 1, 0).getDate();
    const firstDayOfWeek = new Date(selectedYear, selectedMonth, 1).getDay();

    const days = [];

    for (let i = 1; i <= daysInMonth + firstDayOfWeek; i++) {
      const dayNumber = i - firstDayOfWeek;
      const date = new Date(selectedYear, selectedMonth, dayNumber);
      const notice = notices.find(
        (notice) => notice.date.toDateString() === date.toDateString()
      );

      days.push(
        <Day
          key={i}
          date={date}
          notice={notice}
          onApprove={() => this.handleApprove(notice)}
          onDecline={() => this.handleDecline(notice)}
        />
      );
    }

    return (
      <div className="calendar">
        <div className="options">
          <CustomDropdown
            options={[
              { value: 0, label: "January" },
              { value: 1, label: "February" },
              { value: 2, label: "March" },
              { value: 3, label: "April" },
              { value: 4, label: "May" },
              { value: 5, label: "June" },
              { value: 6, label: "July" },
              { value: 7, label: "August" },
              { value: 8, label: "September" },
              { value: 9, label: "October" },
              { value: 10, label: "November" },
              { value: 11, label: "December" },
            ]}
            value={selectedMonth}
            onChange={this.handleMonthChange}
          />
          <CustomDropdown
            options={generateYearOptions()}
            value={selectedYear}
            onChange={this.handleYearChange}
          />
        </div>
        <div className="days">{days}</div>
        {popupNotice && (
          <div className="popup">
            <div className="popup-content">
              <p>{popupNotice.notice}</p>
              <button onClick={() => this.handleApprove(popupNotice)}>
                Approve
              </button>
              <button onClick={() => this.handleDecline(popupNotice)}>
                Decline
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Calendar;

function generateYearOptions() {
  const currentYear = new Date().getFullYear();
  const yearOptions = [];
  for (let year = currentYear; year <= 2070; year++) {
    yearOptions.push({ value: year, label: year.toString() });
  }
  return yearOptions;
}
