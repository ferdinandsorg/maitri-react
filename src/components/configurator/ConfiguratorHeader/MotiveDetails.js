import { useState, useEffect } from "react";
import { NavLink, useParams, useLocation, useMatch } from "react-router-dom";
import client from "../../../sanityClient";
import Loading from "../../Loading";

export default function MotiveDetails() {
  const [currentMotive, setCurrentMotive] = useState(null);
  const { motiveSlug } = useParams();

  const [activeLink, setActiveLink] = useState(null);

  const handleLink = (id) => () => {
    setActiveLink((active) => (active === id ? null : id));
  };

  useEffect(() => {
    const query = `*[_type == "motive" && slug.current == "${motiveSlug}"] {
      title,
      slug,
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
      <p className="font-bold whitespace-nowrap">{currentMotive.title}</p>
      <p className="whitespace-nowrap">
        by{" "}
        <NavLink
          className={({ isActive }) =>
            isActive
              ? "no-underline after:ml-1 after:content-['←']"
              : "underline hover:no-underline after:ml-1 after:content-['→']"
          }
          to={
            activeLink === currentMotive.artist.slug.current
              ? "/motive/" + currentMotive.slug.current
              : "artist/" + currentMotive.artist.slug.current
          }
          onClick={handleLink(currentMotive.artist.slug.current)}
          key={currentMotive.artist.slug.current}>
          {currentMotive.artist.name}
        </NavLink>
      </p>
    </>
  );
}
