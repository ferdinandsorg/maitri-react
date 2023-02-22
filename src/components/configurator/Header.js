import React, { useEffect } from "react";
import { Routes, Route, Link } from "react-router-dom";

function ConfiguratorHeader({ motives, selectedMotive }) {
  return (
    <header className="w-full h-auto flex flex-row justify-between items-start">
      <div>
        <Routes>
          {motives &&
            motives.map((motive) => (
              <Route
                key={motive.slug.current}
                path={`/motive/${motive.slug.current}`}
                element={<Meta motive={motive} />}
              />
            ))}
        </Routes>
      </div>
      <nav className="w-full flex flex-row flex-wrap gap-1 justify-end">
        {motives &&
          motives.map((motive) => (
            <Link
              key={motive.slug.current}
              to={`/motive/${motive.slug.current}`}
              className="btn btn-primary">
              {motive.title}
            </Link>
          ))}
      </nav>
    </header>
  );
}

function Meta({ motive }) {
  if (!motive) {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <p className="font-bold md:whitespace-nowrap">{motive.title}</p>
        <p className="whitespace-nowrap">
          by <a href={"#" + motive.artist.slug.current}>{motive.artist.name}</a>
        </p>
      </>
    );
  }
}

export default ConfiguratorHeader;
