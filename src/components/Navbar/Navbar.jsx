import "./Navbar.css";
import React from "react";

function Navbar({ name, error }) {
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();

  return (
    <nav className="navbar">
      <div className="cityName">{name}</div>

      {error ? (
        <div style={{ display: "inline-block" }} className="wrong-city">
          You enter wrong city!
        </div>
      ) : (
        <div style={{ display: "none" }} className="wrong-city">
          You enter wrong city!
        </div>
      )}
      <div className="date">
        {`${days[date.getDay()]} | ${date.getDate()} -
        ${month[date.getMonth()]} | ${date.getFullYear()} - year.`}
      </div>
    </nav>
  );
}

export default Navbar;
