import { useState, useEffect } from "react";
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      let sidebarPercentage = (e.pageX / window.innerWidth) * 100;

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
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", () => setDragging(false));
      if (contentElement && configuratorElement) {
        contentElement.style.userSelect = "none";
        configuratorElement.style.userSelect = "none";
      }
    } else {
      document.removeEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", () => setDragging(false));
      if (contentElement && configuratorElement) {
        contentElement.style.userSelect = "auto";
        configuratorElement.style.userSelect = "auto";
      }
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", () => setDragging(false));
    };
  }, [dragging, sidebarPercentage, mainPercentage]);

  return (
    <div className="flex flex-row">
      <ConfiguratorLayout
        sidebarFontWdth={sidebarFontWdth}
        sidebarPercentage={sidebarPercentage}
      />

      <Dragbar
        onMouseDown={() => setDragging(true)}
        onMouseUp={handleMouseUp}
        positionLeft={sidebarPercentage}
      />

      <ContentLayout
        mainFontWdth={mainFontWdth}
        mainPercentage={mainPercentage}
      />
    </div>
  );
}
