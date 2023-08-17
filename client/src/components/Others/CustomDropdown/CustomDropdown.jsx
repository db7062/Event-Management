import React from "react";
import "./CustomDropdown.css";

class CustomDropdown extends React.Component {
  render() {
    const { options, value, onChange } = this.props;

    return (
      <div className="custom-dropdown">
        <select value={value} onChange={onChange}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
}

export default CustomDropdown;
