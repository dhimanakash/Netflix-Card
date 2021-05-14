import React from "react";
import Netflix from "./Netflix";
import Nheader from "./Nheader";
import Ndata from "../Ndata";

function Cards() {
  return (
    <>
      <Nheader />
      {/* map(value,index,array) */}
      {Ndata.map((val, idx) => {
        return (
          <Netflix
            imgsrc={val.imgsrc}
            genre={val.genre}
            title={val.title}
            link={val.link}
            key={idx}
          />
        );
      })}
    </>
  );
}

export default Cards;
