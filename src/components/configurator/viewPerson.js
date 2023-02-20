import React from "react";
import Motive from "./Motive.js";
import motivePersonWhite from "../../assets/person-white-x1.png";
import motivePersonBlack from "../../assets/person-black-x1.png";

function viewPerson({ shirtColor, motive }) {
  const getShirtColor = () => {
    if (shirtColor === "white") {
      return motivePersonWhite;
    } else {
      return motivePersonBlack;
    }
  };

  return (
    <>
      <div
        className="w-full h-full bg-no-repeat bg-contain bg-center flex justify-center items-center absolute"
        style={{ backgroundImage: `url(${getShirtColor()})` }}>
        <Motive motive={motive} />
      </div>
    </>
  );
}

export default viewPerson;
