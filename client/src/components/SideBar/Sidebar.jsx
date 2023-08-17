import React from "react";
import "./SideBar.css";
import CircularAvatar from "../Others/CircularAvatar";
export default function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <div className="top">
          <div className="logo">
            <h2>ProjectManager</h2>
          </div>
          <div className="profile">
            <div className="img">
              <CircularAvatar name={"Sanbedan"} />
            </div>

            <h3>Sanbedan Paul</h3>
          </div>
          <div className="role">
            <h3>ARTIST</h3>
          </div>
        </div>
        <div className="bottom">
          <div className="listings">
            <ul>
              <li>
                <a href="">Dashbord</a>
              </li>
              <li>
                <a href="">Account</a>
              </li>
              <li>
                <a href="">Events</a>
              </li>
              <li>
                <a href="">About Us</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">Log out</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
