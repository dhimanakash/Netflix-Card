import React from "react";

function Nheader() {
  const nstyle = {
    backgroundColor: "#94b7f2",
    textAlign: "center",
    padding: "4px 0px 4px 0px",
    marginBottom: "35px",
    fontFamily: "Itim, cursive",
    height: 50,
  };
  return (
    <div className="header">
      <h2 style={nstyle}>List of Top 4 NETFLIX SERIES in 2021</h2>
    </div>
  );
}

export default Nheader;
