import React, { useState, useEffect } from "react";
import client from "../sanityClient.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ConfiguratorHeader from "./configurator/Header";
import ConfiguratorFooter from "./configurator/Footer";
import ConfiguratorMain from "./configurator/Main";
import Aristlink from "./configurator/Artistlink.js";

function Configurator({ sidebarPercentage, sidebarFontWdth, props }) {
  const [footerData, setFooterData] = useState({
    bgColor: "#E4C1F9",
    viewMode: "shirt",
    shirt: {
      color: "white",
      size: "M",
    },
  });

  const [motives, setMotives] = useState(null);
  useEffect(() => {
    const query = `*[_type == "motive"] {
      title,
      slug,
      image,
      price,
      artist->{name, slug}
    }`;
    client
      .fetch(query)
      .then((data) => setMotives(data))
      .catch(console.error);
  }, []);

  const updateFooterData = (field, value) => {
    setFooterData((prevData) => ({ ...prevData, [field]: value }));
  };

  const [currentMotive, setCurrentMotive] = useState(null);
  const handleCurrentMotive = (data) => {
    // console.log("motive data is", data);
    setCurrentMotive(data);
  };

  if (!motives) {
    return "dings";
  }

  return (
    <aside
      id="configurator"
      className="w-1/2 p-5 bg-primary flex flex-col flex-nowrap justify-between min-h-screen relative"
      style={{
        backgroundColor: footerData.bgColor,
        width: `${sidebarPercentage}%`,
        fontVariationSettings: `'wdth' ${sidebarFontWdth}`,
      }}>
      <ConfiguratorHeader motives={motives} />

      <ConfiguratorMain
        motives={motives}
        view={footerData.viewMode}
        shirtColor={footerData.shirt.color}
      />

      <ConfiguratorFooter
        currentViewMode={footerData.viewMode}
        updateViewMode={(newComponent) =>
          updateFooterData("viewMode", newComponent)
        }
        currcentBgColor={footerData.bgColor}
        updateBgColor={(newColor) => updateFooterData("bgColor", newColor)}
        currentShirtColor={footerData.shirt.color}
        updateShirtColor={(newShirtColor) =>
          updateFooterData("shirt", {
            ...footerData.shirt,
            color: newShirtColor,
          })
        }
        currentShirtSize={footerData.shirt.size}
        updateShirtSize={(newShirtSize) =>
          updateFooterData("shirt", {
            ...footerData.shirt,
            size: newShirtSize,
          })
        }
        currentShirtPrice={0}
        motives={motives}
      />
    </aside>
  );
}

export default Configurator;
