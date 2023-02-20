import React, { useState, useEffect } from "react";
import ConfiguratorHeader from "./configurator/Header";
import ConfiguratorFooter from "./configurator/Footer";
import ViewPerson from "./configurator/viewPerson.js";
import ViewShirt from "./configurator/viewShirt.js";
import ViewMotive from "./configurator/viewMotive.js";
import Motive from "./configurator/Motive";
import client from "../sanityClient.js";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

function Configurator({ sidebarPercentage, sidebarFontWdth }) {
  const [allMotives, setAllMotives] = useState(null);
  const [motiveData, setMotiveData] = useState(null);
  const [footerData, setFooterData] = useState({
    // bgColor: "#E4C1F9",
    bgColor: "#E4C1F9",
    viewMode: "shirt",
    shirt: {
      color: "white",
      size: "M",
    },
  });

  const updateFooterData = (field, value) => {
    setFooterData((prevData) => ({ ...prevData, [field]: value }));
  };

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
      .then((data) => setAllMotives(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    let index = 0;
    const query = `*[_type == "motive"] | order(created_at desc) [${index}] {
          title,
          slug,
          image,
          price,
          artist->{name, slug}
        }`;
    client
      .fetch(query)
      .then((data) => setMotiveData(data))
      .catch(console.error);
    // const fetchData = async () => {
    //   let index = 1;
    //   const query = `*[_type == "motive"] | order(created_at desc) [${index}] {
    //     title,
    //     slug,
    //     image,
    //     price,
    //     artist->{name, slug}
    //   }`;
    //   const result = await client.fetch(query);
    //   setMotiveData(result);
    // console.log("result", result);
    // };
    // fetchData();
  }, []);

  if (!motiveData) {
    return <div>Loading...</div>;
  }
  if (!allMotives) {
    return <div>Loading...</div>;
  }

  const motiveCallback = (data) => {
    console.log("motive data is", data);
    setMotiveData(data);
  };

  // allMotives.map((motive, index) => console.log("motive-" + index, motive));
  // console.log("allMotives-", allMotives[0]);

  let wiewMode;
  switch (footerData.viewMode) {
    case "person":
      wiewMode = (
        <ViewPerson
          shirtColor={footerData.shirt.color}
          motive={motiveData.image}
        />
      );
      break;
    case "shirt":
      wiewMode = (
        <ViewShirt
          shirtColor={footerData.shirt.color}
          motive={motiveData.image}
        />
      );
      break;
    case "motive":
      wiewMode = <ViewMotive motive={motiveData.image} />;
      break;
    default:
      wiewMode = null;
  }

  console.log(allMotives);

  return (
    <aside
      id="configurator"
      className="w-1/2 p-5 bg-primary flex flex-col flex-nowrap justify-between min-h-screen relative"
      style={{
        backgroundColor: footerData.bgColor,
        width: `${sidebarPercentage}%`,
        fontVariationSettings: `'wdth' ${sidebarFontWdth}`,
      }}>
      <BrowserRouter>
        <ConfiguratorHeader
          currentShirtMotiveTitle={motiveData.title}
          currentShirtMotiveArtist={motiveData.artist.name}
          currentShirtMotiveArtistSlug={motiveData.artist.slug.current}
        />

        {allMotives &&
          allMotives.map((motive, index) => (
            <React.Fragment key={motive.slug.current}>
              {index > 0 && (
                <Link
                  to={`motive/${allMotives[index - 1].slug.current}`}
                  className="btn btn-primary">
                  ←
                </Link>
              )}
              {index < allMotives.length - 1 && (
                <Link
                  to={`motive/${allMotives[index + 1].slug.current}`}
                  className="btn btn-primary">
                  →
                </Link>
              )}
            </React.Fragment>
          ))}

        <Routes>
          {/* {(allMotives) => (
            <Route
              path="/"
              element={
                <Motive motive={allMotives[0]} callback={motiveCallback} />
              }
            />
          )} */}
          {allMotives &&
            allMotives.map((motive, index) => (
              <Route
                key={motive.slug.current}
                path={"/motive/" + motive.slug.current}
                element={<Motive motive={motive} callback={motiveCallback} />}
              />
            ))}
        </Routes>
      </BrowserRouter>

      {/* <main className="w-full h-full relative">{wiewMode}</main> */}

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
        currentShirtPrice={motiveData.price}
      />
    </aside>
  );
}

export default Configurator;
