import React from "react";
import "./../css/style.css"

function Header({ onClick }) {
  return (
    <div className="">
      <div className="headerr">
        <h1>Task Tracker</h1>
        <button className="btnn" onClick={onClick}>Add</button>
      </div>
    </div>
  );
}

export default Header;
