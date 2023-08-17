import React from "react";
import "../../global.css";
const Avatar = ({ name }) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const avatarStyle = {
    width: "50px",
    height: "50px",
    backgroundColor: "#0bb176",
    color: "white",
    fontSize: "30px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
  };

  return <div style={avatarStyle}>{initials}</div>;
};

export default Avatar;
