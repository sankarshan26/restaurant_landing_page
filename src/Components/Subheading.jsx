import React from "react";
import spoon from "../assets/spoon.png";
import "../CSS/Subheading.css";
function Subheading({ title }) {
  return (
    <>
      <div className="subheading_container">
        <p className="title_para">{title}</p>
        <img src={spoon} alt="" className="spoon-img" />
      </div>
    </>
  );
}

export default Subheading;
