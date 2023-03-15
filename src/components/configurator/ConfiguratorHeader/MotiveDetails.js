import { useState, useEffect } from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import client from "../../../sanityClient";
import Loading from "../../Loading";

export default function MotiveDetails() {
  const [currentMotive, setCurrentMotive] = useState(null);
  const [artistLink, setArtistLink] = useState(null);
  const { motiveSlug, artistSlug } = useParams();

  useEffect(() => {
    const query = `*[_type == "motive" && slug.current == "${motiveSlug}"] {
          title,
          artist->{name, slug}
        }`;
    client
      .fetch(query)
      .then((data) => setCurrentMotive(data[0]))
      .catch(console.error);
  }, [currentMotive]);

  if (!currentMotive) {
    return <Loading />;
  }

  return (
    <>
      <p className="font-bold md:whitespace-nowrap">{currentMotive.title}</p>
      <p className="whitespace-nowrap">
        by{" "}
        <NavLink
          className={({ isActive }) =>
            isActive ? "no-underline" : "underline hover:no-underline"
          }
          to={"artist/" + currentMotive.artist.slug.current}
          key={currentMotive.artist.slug.current}>
          {currentMotive.artist.name}
        </NavLink>
      </p>
    </>
  );
}
