import React, { useState, useEffect } from "react";

function Dragbar({ onMouseDown, onMouseUp, positionLeft }) {
  return (
    <div
      id="dragbar"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className="h-screen px-5 absolute top-0 left-1/2 -translate-x-2/4 z-50 cursor-col-resize"
      style={{ left: `${positionLeft}%` }}>
      <div className="h-screen w-[3px] bg-black "></div>
      {/* <div className="drag-icon d-flex flex-row">
            <span></span>
            <span></span>
            <span></span>
        </div> */}
    </div>
  );
}

export default Dragbar;
