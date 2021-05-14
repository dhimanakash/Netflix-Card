import React from "react";

function ImagesAndLink() {
  const link1 = "https://picsum.photos/300/300";
  const link2 = "https://picsum.photos/250/300";
  const link3 = "https://picsum.photos/350/300";
  const link = "https://picsum.photos/";
  const time = new Date().toLocaleTimeString();

  return (
    <div>
      {/* <TimeAndDate /> */}
      {/* <h1 contentEditable="true">Hello World!</h1> */}
      <h1 className="heading">Hello World!</h1>
      <a href="#" style={{ textDecoration: "none" }} className="anchor">
        This is a link expire on 24h hrs- {time}.
      </a>
      <div className="random-image">
        <img src={link1} alt="random Images" style={{ margin: "4px 16px" }} />
        <img src={link2} alt="random Images" style={{ margin: "4px 16px" }} />
        <a href={link} target="_blank">
          <img src={link3} alt="random Images" />
        </a>
      </div>
    </div>
  );
}

export default ImagesAndLink;
