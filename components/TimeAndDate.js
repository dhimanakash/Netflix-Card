import React from "react";
// import ReactDOM from "react-dom";

function TimeAndDate() {
  const fname = "Akash";
  const mast = "Netflix";
  const thodaMast = "Amazon";

  const today = new Date().toLocaleDateString();
  const time = new Date().toLocaleTimeString();

  return (
    <div className="time-date">
      style=
      {{
        color: "black",
        background: "grey",
        width: "100%",
        height: "500px",
        border: "2px solid red",
      }}
      <h1>{`Hello World!, ${fname}`}</h1>
      <div
        style={{
          color: "white",
          border: "2px solid blue",
          display: "inline-block",
        }}
      >
        <h3>{`Date is ${today}`}</h3>
        <h3>{`Current Time is ${time}`}</h3>
      </div>
      <p>List of {2 + 3} Netflix series ....</p>
      <div>My Lucky number is {Math.random()}</div>
      <ol>
        <li>{`Money Heist (${mast})`}</li>
        <li>Teen Wolf ({`${mast}`})</li>
        <li>Vampire Diaries </li>
        <li>Mr Robot ({`${thodaMast}`})</li>
        <li>Dark</li>
      </ol>
    </div>
  );
}

export default TimeAndDate;
