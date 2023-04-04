import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import client from "../../sanityClient";
import Loading from "../Loading";
import MotiveDetails from "./ConfiguratorHeader/MotiveDetails";

export default function ConfiguratorHeader() {
  const [motives, setMotives] = useState(null);
  useEffect(() => {
    const query = `*[_type == "motive"] {
            title,
            slug
          }`;
    client
      .fetch(query)
      .then((data) => setMotives(data))
      .catch(console.error);
  }, []);

  if (!motives) {
    return <Loading />;
  }

  return (
    <header className="w-full h-auto flex flex-row justify-between items-start gap-4">
      <div className="meta">
        <MotiveDetails />
      </div>
      <nav className="w-full flex flex-row flex-wrap gap-1 justify-end">
        <PrevNextMotive motives={motives} />
      </nav>
    </header>
  );
}

// function Meta({ motiveSlug }) {
//   const [currentMotive, setCurrentMotive] = useState(null);
//   useEffect(() => {
//     const query = `*[_type == "motive" && slug.current == "${motiveSlug}"] {
//       title,
//       artist->{name, slug}
//     }`;
//     client
//       .fetch(query)
//       .then((data) => setCurrentMotive(data[0]))
//       .catch(console.error);
//   }, [currentMotive]);

//   if (!currentMotive) {
//     return <Loading />;
//   }

//   return (
//     <>
//       <p className="font-bold md:whitespace-nowrap">{currentMotive.title}</p>
//       <p className="whitespace-nowrap">
//         by{" "}
//         <NavLink
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active" : ""
//           }
//           to=""
//           key={currentMotive.artist.slug.current}>
//           {currentMotive.artist.name} Halo
//         </NavLink>
//       </p>
//     </>
//   );
// }

function PrevNextMotive({ motives }) {
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
      <NavLink
        to={`/motive/${
          currentMotiveIndex > 0
            ? motives[currentMotiveIndex - 1].slug.current
            : currentMotive.slug.current
        }`}
        className={
          "btn " +
          (currentMotiveIndex === 0 &&
            "hover:bg-white hover:text-black opacity-50 cursor-default")
        }
        title={
          currentMotiveIndex > 0
            ? "Previous ← " + motives[currentMotiveIndex - 1].title
            : undefined
        }
        onClick={handlePrevClick}>
        ←
      </NavLink>
      <NavLink
        to={`/motive/${
          currentMotiveIndex < motives.length - 1
            ? motives[currentMotiveIndex + 1].slug.current
            : currentMotive.slug.current
        }`}
        className={
          "btn " +
          (currentMotiveIndex === motives.length - 1 &&
            "hover:bg-white hover:text-black opacity-50 cursor-default")
        }
        title={
          currentMotiveIndex < motives.length - 1
            ? "Next → " + motives[currentMotiveIndex + 1].title
            : undefined
        }
        onClick={handleNextClick}>
        →
      </NavLink>
    </nav>
  );
}
