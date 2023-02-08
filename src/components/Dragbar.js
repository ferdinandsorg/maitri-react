function Dragbar() {
    return (<div id="dragbar" className="h-screen px-8 absolute top-0 left-1/2 -translate-x-2/4 z-50">
        <div className="h-screen w-px bg-black"></div>
        {/* <div className="drag-icon d-flex flex-row">
            <span></span>
            <span></span>
            <span></span>
        </div> */}
    </div>);
  }
  
  export default Dragbar;