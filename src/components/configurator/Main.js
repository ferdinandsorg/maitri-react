import React, { useState, useEffect, useRoutes } from "react";
import { BrowserRouter, Route, Routes, Switch } from "react-router-dom";
import Motive from "./Motive";

function ConfiguratorMain({ motives, view, shirtColor }) {
  const [selectedMotive, setSelectedMotive] = useState(null);

  function handleMotiveSelect(motiveSlug) {
    setSelectedMotive(motiveSlug);
  }

  if (motives) {
    console.log("motives", motives);
  } else {
    console.log("ding 😤", motives);
  }

  // const routeConfig = [
  //   {
  //     path: "/",
  //     element: (
  //       <Motive
  //         motive={motives[0]}
  //         view={view}
  //         shirtColor={shirtColor}
  //         onSelect={() => handleMotiveSelect(motives[0].slug.current)}
  //       />
  //     ),
  //   },
  //   ...motives.map((motive) => ({
  //     path: `/motive/${motive.slug.current}`,
  //     element: (
  //       <Motive
  //         motive={motive}
  //         view={view}
  //         shirtColor={shirtColor}
  //         onSelect={() => handleMotiveSelect(motive.slug.current)}
  //       />
  //     ),
  //   })),
  // ];
  // const element = useRoutes(routeConfig);
  // return { element };
  return (
    <Routes>
      {/* {motives && (
        <Route exact path="/">
          <Motive
            motive={motives[0]}
            view={view}
            shirtColor={shirtColor}
            onSelect={() => handleMotiveSelect(motives[0].slug.current)}
          />
        </Route>
      )} */}
      {motives &&
        motives.map((motive) => (
          <Route
            key={motive.slug.current}
            path={`motive_${motive.slug.current}`}
            element={
              <Motive
                motive={motive}
                view={view}
                shirtColor={shirtColor}
                onSelect={() => handleMotiveSelect(motive.slug.current)}
              />
            }
          />
        ))}
    </Routes>
  );
}

export default ConfiguratorMain;
