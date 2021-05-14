import React from "react";
import "./Netflix.css";
function Netflix(props) {
  return (
    <>
      <div className="cards">
        <div className="card">
          <img src={props.imgsrc} alt="Unsupported" className="card-img" />
          <div className="card-info">
            <span className="card-category">{props.genre}</span>
            <h3 className="card-title">{props.title}</h3>
            <a href={props.link} target="_blank">
              <button>Watch Now</button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Netflix;
