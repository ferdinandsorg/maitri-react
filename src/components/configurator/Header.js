import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import Loading from "../Loading";
import Aristlink from "./Artistlink";

function ConfiguratorHeader({ motives }) {
  return (
    <header className="w-full h-auto flex flex-row justify-between items-start">
      <div>
        <Routes>
          {motives &&
            motives.map((motive) => (
              <Route
                key={motive.slug.current}
                path={`motive_${motive.slug.current}`}
                element={<Meta motive={motive} />}
              />
            ))}
        </Routes>
      </div>
      <nav className="w-full flex flex-row flex-wrap gap-1 justify-end">
        {/* {motives &&
          motives.map((motive) => (
            <Link
              key={motive.slug.current}
              to={`/motive/${motive.slug.current}`}
              className="btn btn-primary">
              {motive.title}
            </Link>
          ))} */}
        {motives && <MotivesList motives={motives} />}
      </nav>
    </header>
  );
}

function Meta({ motive }) {
  if (!motive) {
    return <Loading />;
  } else {
    return (
      <>
        <p className="font-bold md:whitespace-nowrap">{motive.title}</p>
        <p className="whitespace-nowrap">
          by <Aristlink artist={motive.artist.slug.current} />
        </p>
      </>
    );
  }
}

function MotivesList({ motives }) {
  const [currentMotiveIndex, setCurrentMotiveIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentMotiveIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNextClick = () => {
    setCurrentMotiveIndex((prevIndex) =>
      prevIndex < motives.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const currentMotive = motives[currentMotiveIndex];

  return (
    <nav className="flex flex-row gap-1">
      <Link
        to={`motive_${
          currentMotiveIndex > 0
            ? motives[currentMotiveIndex - 1].slug.current
            : currentMotive.slug.current
        }`}
        className={
          "btn " +
          (currentMotiveIndex === 0 &&
            "hover:bg-white hover:text-black opacity-70 cursor-default")
        }
        title={
          currentMotiveIndex > 0
            ? "Previous ← " + motives[currentMotiveIndex - 1].title
            : undefined
        }
        onClick={handlePrevClick}>
        ←
      </Link>
      <Link
        to={`motive_${
          currentMotiveIndex < motives.length - 1
            ? motives[currentMotiveIndex + 1].slug.current
            : currentMotive.slug.current
        }`}
        className={
          "btn " +
          (currentMotiveIndex === motives.length - 1 &&
            "hover:bg-white hover:text-black opacity-70 cursor-default")
        }
        title={
          currentMotiveIndex < motives.length - 1
            ? "Next → " + motives[currentMotiveIndex + 1].title
            : undefined
        }
        onClick={handleNextClick}>
        →
      </Link>
    </nav>
  );
}

export default ConfiguratorHeader;
