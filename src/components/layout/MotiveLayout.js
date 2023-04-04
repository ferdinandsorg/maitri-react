import { useState, useEffect, useRef } from "react";
import ConfiguratorLayout from "./ConfiguratorLayout";
import Dragbar from "../Dragbar";
import ContentLayout from "./ContentLayout";

export default function MotiveLayout() {
  const minFontWeight = 62;
  const maxFontWeight = 125;
  const [dragging, setDragging] = useState(false);
  const [sidebarPercentage, setSidebarPercentage] = useState(50);
  const [mainPercentage, setMainPercentage] = useState(50);
  const [sidebarFontWdth, setSidebarFontWdth] = useState(
    (minFontWeight + maxFontWeight) / 2
  );
  const [mainFontWdth, setMainFontWdth] = useState(
    (minFontWeight + maxFontWeight) / 2
  );
  const minPercentage = 30;
  const maxPercentage = 70;

  function map(val, srcMin, srcMax, dstMin, dstMax) {
    return ((val - srcMin) / (srcMax - srcMin)) * (dstMax - dstMin) + dstMin;
  }

  const handleMouseUp = (e) => {
    setDragging(false);
  };

  const handleTouchEnd = (e) => {
    setDragging(false);
  };

  useEffect(() => {
    const handleMove = (e) => {
      e.preventDefault();
      let grabber, sidebarPercentage;
      // console.log(e);
      if (e.touches) {
        isMobile
          ? (grabber = e.touches[0].clientY)
          : (grabber = e.touches[0].clientX);
      } else {
        isMobile ? (grabber = e.clientY) : (grabber = e.clientX);
      }
      isMobile
        ? (sidebarPercentage = (grabber / window.innerHeight) * 100)
        : (sidebarPercentage = (grabber / window.innerWidth) * 100);

      if (
        sidebarPercentage >= minPercentage &&
        sidebarPercentage <= maxPercentage
      ) {
        setSidebarPercentage(sidebarPercentage);
        setMainPercentage(100 - sidebarPercentage);
        setSidebarFontWdth(
          map(
            sidebarPercentage,
            minPercentage,
            maxPercentage,
            minFontWeight,
            maxFontWeight
          )
        );
        setMainFontWdth(
          map(
            mainPercentage,
            minPercentage,
            maxPercentage,
            minFontWeight,
            maxFontWeight
          )
        );
      }
    };

    var contentElement = document.getElementById("content");
    var configuratorElement = document.getElementById("configurator");

    if (dragging) {
      // console.log("moin");
      document.addEventListener("mousemove", handleMove);
      document.addEventListener("touchmove", handleMove);
      document.addEventListener("mouseup", handleMouseUp);
      document.addEventListener("touchend", handleTouchEnd, { passive: true });
      if (contentElement && configuratorElement) {
        contentElement.style.userSelect = "none";
        configuratorElement.style.userSelect = "none";
      }
    } else {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove, { passive: true });
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleTouchEnd, {
        passive: true,
      });
      if (contentElement && configuratorElement) {
        contentElement.style.userSelect = "auto";
        configuratorElement.style.userSelect = "auto";
      }
    }

    return () => {
      document.removeEventListener("mousemove", handleMove);
      document.removeEventListener("touchmove", handleMove, { passive: true });
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("touchend", handleTouchEnd, {
        passive: true,
      });
    };
  }, [dragging, sidebarPercentage, mainPercentage]);

  const [isMobile, setIsMobile] = useState();
  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsMobile(false);
      } else {
        setIsMobile(true);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  });

  //-------------------------------------------------------------------------------------

  // const [xPosition, setXPosition] = useState(0);
  // const [isDragging, setIsDragging] = useState(false);
  // const dragRef = useRef(null);
  // useEffect(() => {
  //   document.addEventListener("mousemove", handleMouseMove);
  //   document.addEventListener("mouseup", handleMouseUp);
  //   document.addEventListener("touchmove", handleTouchMove, { passive: false });
  //   document.addEventListener("touchend", handleTouchEnd);
  //   return () => {
  //     document.removeEventListener("mousemove", handleMouseMove);
  //     document.removeEventListener("mouseup", handleMouseUp);
  //     document.removeEventListener("touchmove", handleTouchMove, {
  //       passive: false,
  //     });
  //     document.removeEventListener("touchend", handleTouchEnd);
  //   };
  // });

  // const handleMouseDown = (e) => {
  //   setIsDragging(true);
  //   dragRef.current = e.clientX;
  // };

  // const handleMouseMove = (e) => {
  //   if (!isDragging) return;
  //   const dx = e.clientX - dragRef.current;
  //   // console.log("dx", dx);
  //   let sidebarPercentage = (e.clientX / window.innerHeight) * 100;
  //   setXPosition((prevX) => prevX + dx);

  //   if (
  //     sidebarPercentage >= minPercentage &&
  //     sidebarPercentage <= maxPercentage
  //   ) {
  //     setSidebarPercentage(sidebarPercentage);
  //     setMainPercentage(100 - sidebarPercentage);
  //     setSidebarFontWdth(
  //       map(
  //         sidebarPercentage,
  //         minPercentage,
  //         maxPercentage,
  //         minFontWeight,
  //         maxFontWeight
  //       )
  //     );
  //     setMainFontWdth(
  //       map(
  //         mainPercentage,
  //         minPercentage,
  //         maxPercentage,
  //         minFontWeight,
  //         maxFontWeight
  //       )
  //     );
  //   }

  //   dragRef.current = e.clientX;
  // };

  // const handleMouseUp = () => {
  //   setIsDragging(false);
  // };

  // const handleTouchStart = (e) => {
  //   setIsDragging(true);
  //   console.log("ddd");
  //   dragRef.current = e.touches[0].clientX;
  // };

  // const handleTouchMove = (e) => {
  //   e.preventDefault(); // add this line
  //   if (!isDragging) return;
  //   const dx = e.touches[0].clientX - dragRef.current;
  //   console.log("dx", dx);
  //   setXPosition((prevX) => prevX + dx);

  //   let sidebarPercentage = (e.touches[0].clientX / window.innerWidth) * 100;
  //   // setXPosition((prevX) => prevX + dx);

  //   if (
  //     sidebarPercentage >= minPercentage &&
  //     sidebarPercentage <= maxPercentage
  //   ) {
  //     setSidebarPercentage(sidebarPercentage);
  //     setMainPercentage(100 - sidebarPercentage);
  //     setSidebarFontWdth(
  //       map(
  //         sidebarPercentage,
  //         minPercentage,
  //         maxPercentage,
  //         minFontWeight,
  //         maxFontWeight
  //       )
  //     );
  //     setMainFontWdth(
  //       map(
  //         mainPercentage,
  //         minPercentage,
  //         maxPercentage,
  //         minFontWeight,
  //         maxFontWeight
  //       )
  //     );
  //   }

  //   dragRef.current = e.touches[0].clientX;
  // };

  // const handleTouchEnd = () => {
  //   setIsDragging(false);
  // };

  return (
    <div className="flex flex-col md:flex-row">
      <ConfiguratorLayout
        sidebarFontWdth={sidebarFontWdth}
        sidebarPercentage={sidebarPercentage}
        isMobile={isMobile}
      />

      {/* <Dragbar
        // onMouseDown={() => setDragging(true)}
        // onMouseUp={handleMouseUp}
        // onTouchStart={() => setDragging(true)}
        // onTouchEnd={handleMouseUp}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        positionLeft={sidebarPercentage}
        isMobile={isMobile}
      /> */}

      <div
        id="dragbar"
        // onMouseDown={onMouseDown}
        // onMouseUp={onMouseUp}
        // onMouseDown={handleMouseDown}
        // onTouchStart={handleTouchStart}
        onMouseDown={() => setDragging(true)}
        onMouseUp={handleMouseUp}
        onTouchStart={() => setDragging(true)}
        onTouchEnd={handleMouseUp}
        className="w-full md:w-auto top-1/2 left-0 -translate-y-2/4 px-0 py-5 md:px-5 md:py-0 md:h-screen md:top-0 md:left-1/2 md:-translate-x-2/4 md:translate-y-0 group fixed z-50 cursor-row-resize md:cursor-col-resize"
        style={
          isMobile
            ? {
                top: `${sidebarPercentage}vh`,
              }
            : {
                left: `${sidebarPercentage}%`,
              }
        }>
        <div className="h-[1px] w-full md:h-screen md:w-[1px] md:transition-all bg-black shadow-2xl md:group-hover:w-[3px]"></div>
        <div className="flex flex-col md:flex-row bg-black absolute top-1/2 left-1/2 px-2 py-1 md:px-1 md:py-2 gap-px rounded-full -translate-x-1/2 -translate-y-1/2">
          <span className="block w-3 h-[1px] md:w-[1px] md:h-3 bg-white transition-all md:group-hover:h-4 md:group-focus:h-4"></span>
          <span className="block w-3 h-[1px] md:w-[1px] md:h-3 bg-white transition-all md:group-hover:h-4 md:group-focus:h-4"></span>
          <span className="block w-3 h-[1px] md:w-[1px] md:h-3 bg-white transition-all md:group-hover:h-4 md:group-focus:h-4"></span>
        </div>
      </div>

      <ContentLayout
        mainFontWdth={mainFontWdth}
        mainPercentage={mainPercentage}
        isMobile={isMobile}
      />
    </div>
  );
}
