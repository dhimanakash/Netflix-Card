import React from "react";
import "./Project1.css";

function Project1() {
  // we can pass our values in date in the format of (year,month,date,day)
  let curdate = new Date();
  curdate = curdate.getHours();
  let greet = "";
  const cssStyle = {};

  if (curdate < 12) {
    greet = "Good Morning";
    cssStyle.color = "green";
  } else if (curdate <= 16) {
    greet = "Good afternoon";
    cssStyle.color = "cyan";
  } else {
    greet = "Good Night";
    cssStyle.color = "black";
  }

  return (
    <div className="container">
      <div className="box">
        Hello Akash, its <span style={cssStyle}>{greet} </span>
      </div>
    </div>
  );
}

export default Project1;
