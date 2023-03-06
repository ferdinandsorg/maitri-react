import React, { useState, useEffect } from "react";
import Configurator from "./components/Configurator";
import Content from "./components/Content";
import Dragbar from "./components/Dragbar";
import client from "./sanityClient";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    const query = `*[_type == "siteSettings"][0]`;
    client
      .fetch(query)
      .then((data) => {
        document.title = data.title + " – " + data.description;
      })
      .catch(console.error);
  }, []);

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
    <>
      <BrowserRouter>
        <Configurator
          sidebarFontWdth={sidebarFontWdth}
          sidebarPercentage={sidebarPercentage}
        />
        <Dragbar
          onMouseDown={() => setDragging(true)}
          onMouseUp={handleMouseUp}
          positionLeft={sidebarPercentage}
        />
        <Content mainFontWdth={mainFontWdth} mainPercentage={mainPercentage} />
      </BrowserRouter>
    </>
  );
}

export default App;
