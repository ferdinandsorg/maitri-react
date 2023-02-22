import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Motive from "./Motive";

function ConfiguratorMain({ motives, view, shirtColor }) {
  const [selectedMotive, setSelectedMotive] = useState(null);

  function handleMotiveSelect(motiveSlug) {
    setSelectedMotive(motiveSlug);
  }
  return (
    <Routes>
      {motives &&
        motives.map((motive) => (
          <Route
            key={motive.slug.current}
            path={`/motive/${motive.slug.current}`}
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
