function Dragbar({ onMouseDown, onMouseUp, positionLeft, isMobile }) {
  return (
    <div
      id="dragbar"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      // onMouseDown={handleMouseDown}
      // onTouchStart={handleTouchStart}
      className="w-full md:w-auto top-1/2 left-0 -translate-y-2/4 px-0 py-5 md:px-5 md:py-0 md:h-screen md:top-0 md:left-1/2 md:-translate-x-2/4 md:translate-y-0 group fixed z-50 cursor-row-resize md:cursor-col-resize"
      style={
        isMobile
          ? {
              top: `${positionLeft}vh`,
            }
          : {
              left: `${positionLeft}%`,
            }
      }>
      <div className="h-[1px] w-full md:h-screen md:w-[1px] md:transition-all bg-black shadow-2xl md:group-hover:w-[3px]"></div>
      <div className="flex flex-col md:flex-row bg-black absolute top-1/2 left-1/2 px-2 py-1 md:px-1 md:py-2 gap-px rounded-full -translate-x-1/2 -translate-y-1/2">
        <span className="block w-3 h-[1px] md:w-[1px] md:h-3 bg-white transition-all md:group-hover:h-4 md:group-focus:h-4"></span>
        <span className="block w-3 h-[1px] md:w-[1px] md:h-3 bg-white transition-all md:group-hover:h-4 md:group-focus:h-4"></span>
        <span className="block w-3 h-[1px] md:w-[1px] md:h-3 bg-white transition-all md:group-hover:h-4 md:group-focus:h-4"></span>
      </div>
    </div>
  );
}

export default Dragbar;
