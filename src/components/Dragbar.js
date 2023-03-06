import React, { useState, useEffect } from "react";

function Dragbar({ onMouseDown, onMouseUp, positionLeft }) {
  return (
    <div
      id="dragbar"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      className="group h-screen px-5 absolute top-0 left-1/2 -translate-x-2/4 z-50 cursor-col-resize"
      style={{ left: `${positionLeft}%` }}>
      <div className="h-screen transition-all w-[1px] bg-black shadow-2xl group-hover:w-[3px]"></div>
      <div className="flex flex-row bg-black absolute top-1/2 left-1/2 px-1 py-2 gap-px rounded-full -translate-x-1/2 -translate-y-1/2">
        <span className="block w-[1px] bg-white h-3 transition-all group-hover:h-4 group-focus:h-4"></span>
        <span className="block w-[1px] bg-white h-3 transition-all group-hover:h-4 group-focus:h-4"></span>
        <span className="block w-[1px] bg-white h-3 transition-all group-hover:h-4 group-focus:h-4"></span>
      </div>
      {/* background-color: var(--color-secondary); position: absolute; top: 50%;
      left: 50%; transform: translate(-50%, -50%) scale(1); padding: 8px 4px;
      gap: 2px; border-radius: 8px; transition: var(--transition); */}
    </div>
  );
}

export default Dragbar;
