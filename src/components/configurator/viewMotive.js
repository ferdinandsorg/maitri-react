import React from "react";
import Motive from "./Motive.js";

function viewMotive({ motive }) {
  return (
    <>
      <div className="w-full h-full bg-no-repeat bg-contain bg-center flex justify-center items-center absolute">
        <Motive motive={motive} />
      </div>
    </>
  );
}

export default viewMotive;
