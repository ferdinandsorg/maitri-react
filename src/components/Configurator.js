import React, { useState, useEffect } from "react";
import ConfiguratorHeader from "./configurator/Header";
import ConfiguratorFooter from "./configurator/Footer";
import ViewPerson from "./configurator/viewPerson.js";
import ViewShirt from "./configurator/viewShirt.js";
import ViewMotive from "./configurator/viewMotive.js";
import Motive from "./configurator/Motive";
import client from "../sanityClient.js";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Body({ motives }) {
  const [selectedMotive, setSelectedMotive] = useState(null);

  function handleMotiveSelect(motiveSlug) {
    setSelectedMotive(motiveSlug);
  }
  return (
    <div>
      <Routes>
        {motives &&
          motives.map((motive) => (
            <Route
              key={motive.slug.current}
              path={`/motive/${motive.slug.current}`}
              element={
                <Motive
                  motive={motive}
                  onSelect={() => handleMotiveSelect(motive.slug.current)}
                />
              }
            />
          ))}
      </Routes>
    </div>
  );
}

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

  // let wiewMode;
  // switch (footerData.viewMode) {
  //   case "person":
  //     wiewMode = (
  //       <ViewPerson shirtColor={footerData.shirt.color} motive={motive.image} />
  //     );
  //     break;
  //   case "shirt":
  //     wiewMode = (
  //       <ViewShirt shirtColor={footerData.shirt.color} motive={motive.image} />
  //     );
  //     break;
  //   case "motive":
  //     wiewMode = <ViewMotive motive={motive.image} />;
  //     break;
  //   default:
  //     wiewMode = null;
  // }

  return (
    <aside
      id="configurator"
      className="w-1/2 p-5 bg-primary flex flex-col flex-nowrap justify-between min-h-screen relative"
      style={{
        backgroundColor: footerData.bgColor,
        width: `${sidebarPercentage}%`,
        fontVariationSettings: `'wdth' ${sidebarFontWdth}`,
      }}>
      {/* <ConfiguratorHeader motiveMeta={motive} /> */}

      <BrowserRouter>
        <ConfiguratorHeader motives={motives} />

        <Body motives={motives} />

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
      </BrowserRouter>
    </aside>
  );
}

export default Configurator;
